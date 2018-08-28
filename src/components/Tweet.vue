<template>
  <div class='father'>
    <Card class='card' :dis-hover="true" :bordered="false">
      <Row class='personcard'>
        <Col span='3'>
        <img class='personphoto' src="../assets/img/link.jpg" alt="">
        </Col>
        <Col span='20'>
        <div class="titles">
          {{ row.$user.username || row.$user.phone}}
        </div>
        <div style='font-size:12px'>今天00：01 来自 微博 weibo.com</div>
        <div>{{row.content}} 
          {{row.tweet_form }}
           <span style='color:red;' v-if='row.tweet_form'>
          {{row.oldvalue}}
          </span> 
        </div>
        <div >
         
           <img style='margin:20px 0;' :src='(row.picture&&row.picture!=null) ? row.picture : "http://wx2.sinaimg.cn/mw690/006qLr31ly1fu4r2p8kfvj31hc0u0n4n.jpg"' > 
        </div>
        </Col>

      </Row>
      <Row class='center read'>
        <Col span='6'>
        <Icon type="ios-star-outline" />
        <span v-if='collect_visible' @click='collect_visible=false'>已收藏</span>
        <span v-else @click='collect_visible=true'>

        收藏
        </span>

        </Col>
        <Col span='6'>
        <Icon size='20' type="ios-send-outline" />
        <span @click='openSendModal($event,row)' >
          转发

        </span>
        </Col>
        <Col span='6'>
        <Icon type="ios-heart-outline" /> 
        <span v-if='visible' @click='visible=false'>已赞</span> 
        <span v-else @click='visible=true'>  赞</span>
        </Col>
        <Col span='6'>
        <span @click='show_comment(row.id)'>

          <Icon type="ios-chatboxes-outline" /> 评论
        </span>
        </Col>
      </Row>
      <div v-if='comment_visible' class="demo-avatar">
        <Row>
          <Row v-if="!form.reply_to">
            <Col span='3'>
            <Avatar class='avatar' icon="ios-person" />
            </Col>
            <Col span='21'>
            <form @submit.prevent='submit(row.id)'>
              <Input :disabled="!his.id" v-model="form.content" type="textarea" placeholder="Enter something..." />
              <Row class='icon' style='margin-top:5px'>
                <div class='center ' style='margin-top:8px;'>
                  <Col span='2'>
                  <Icon size='25' type="ios-image-outline" />
                  </Col>
                  <Col span='2'>
                  <Icon size='25' type="ios-podium-outline" />
                  </Col>
                  <Col span='2'></Col>
                  <Col span='2'>
                  <Icon size='25' type="ios-pin-outline" />
                  </Col>

                </div>
                <div class='right'>
                  <Button size='small' html-type='submit' type="primary" shape="circle" ghost>评论</Button>
                </div>

              </Row>
            </form>

            </Col>
          </Row>

          <Row>
            <div style='font-size:13px' class='comment' v-for='it in comment_list'>
              <Row>
                <Col span='3'>
                <Avatar style='margin-top:5px' class='avatar' icon="ios-person" />
                </Col>
                <Col span='17'>
                <div>
                  <span>

                    {{ it.$user ? it.$user.username :'-'}}

                    <span v-if='form.reply_to'>回复</span>
                  </span>: {{it.content}}

                </div>
                <div style='font-size:3px' >
                  12分钟前
                </div>

                </Col>
                <span>
                  <Col span='2' class='right'>
                  <span v-if='it.id==form.reply_to' @click='form.reply_to=null'>取消</span>
                  <span v-else @click='remove(it.id,row.id)'>删除</span>
                  </Col>

                </span>
                <Col span='2' class='right'>
                <span @click='form.reply_to=it.id'>回复</span>
                </Col>
              </Row>

              <form v-if='it.id==form.reply_to' @submit.prevent='submit(row.id)'>
                <Input style='padding-left:55px' :disabled="!his.id" v-model="form.content" type="textarea" placeholder="Enter something..." />
                <Row class='icon' style='margin-top:5px'>

                  <div class='right'>
                    <Button @click='form.reply_to=null' size='small' html-type='submit' type="primary" shape="circle" ghost>评论</Button>
                  </div>

                </Row>
              </form>
            </div>
          </Row>

        </Row>

      </div>

    </Card>
    <Modal @on-ok='submit_transmit(currentModal.id)' v-model="modalVisible" title='转发微博'>
       <p>@{{currentModal.$user ?currentModal.$user.username:'-'}}
         {{currentModal.content}}
       
       
         <!-- {{tweet_list.$user ? tweet_list.$user.username :'-'}}{{tweet_list.content}} -->
         <Input v-model='otherform.content' type="textarea" placeholder="Enter something..."></Input>
        
    </p>
  
    

    </Modal>

  </div>
</template>

<script>
import Modal from "./Modal.vue";
import session from "../lib/session";
import api from "../lib/api";

export default {
  props: {
    row: {
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      his: {},
      form: {},
      otherform:{},
      content:{},
      transpond_list:[],
      visible:false,
      collect_visible:false,
      
      comment_visible: false,
      comment_list: [],
      tweet_list:[],
      currentModal:{
        oldvalue:'',
      },
      modalVisible:false,
      timeline:[],
    };
  },
  mounted() {
    this.his = session.uinfo();
    this.init_form();
   
   
  },
  methods: {
    
    openSendModal(e,row){
      this.modalVisible=true;
     this.currentModal = row
     if(row.tweet_form){
       api('tweet/find',{id:tweet_form})
       .then(r=>{
         this.currentModal.oldvalue=r.data.content;
         console.log(r.data)
       })
     }
    },
    read_tweet(id){
      api('tweet/find',{id,with:{relation:'has_one',model:'user'}})
      .then(r=>{
        this.tweet_list=r.data;
        console.log(r.data);
      })
    },
    submit_transmit(id){
      this.otherform.tweet_form=id;
      console.log(this.otherform.tweet_form)
      this.otherform.user_id= this.his.id;
      console.log(this.otherform.user_id)
      
      api('tweet/create',this.otherform)
      .then(r=>{
      
        this.read_timeline(); 
      })
    },
    read_timeline() {
      api("tweet/read", {
        where: [
          [
            "user_id",
            "in",
            this.pluck(this.followed_list, "id").concat(this.his.id)
          ]
        ],
        with: "belongs_to:user"
      }).then(r => {
        this.timeline = r.data;
        // console.log(r.data);
      });
    },
    pluck(arr, key) {
      const result = [];
      if (arr == null) return result;
      arr.forEach(it => {
        result.push(it[key]);
      });

      return result;
    },
    
    remove(id, tweet_id) {
      api("comment/delete", { id }).then(r => {
        console.log(r.data);
        this.read_comment(tweet_id);
      });
    },
    submit(tweet_id) {
      this.form.tweet_id = tweet_id;
      // console.log(this.form.tweet_id)
      this.form.user_id = this.his.id;
      //  console.log(this.his.id)
      api("comment/create", this.form).then(r => {
        //console.log(r.data);
        this.comment_list.unshift(r.data);
        this.read_comment(tweet_id);
        this.init_form();
      });
    },
    read_comment(tweet_id) {
      //console.log(tweet_id)
      api("comment/read", { where: { tweet_id }, with: "has_one:user" }).then(
        r => {
          this.comment_list = r.data || [];
          console.log(this.comment_list);
        }
      );
    },
    show_comment(tweet_id) {
      // console.log(tweet_id)
      if (!this.comment_visible) this.read_comment(tweet_id);

      this.comment_visible = !this.comment_visible;
    },
    init_form() {
      this.form = {
        // user_id: this.his.id,
        reply_to: null
      };
    }
  }
};
</script>

<style scoped>
.avatar{
  margin-left:25px;
  margin-right:15px;
}
.comment {
  padding: 5px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
.button {
  border: none;

  padding: 0px;
}

.titles {
  font-size: 17px;
}
.personphoto {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
</style>


