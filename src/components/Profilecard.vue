<template>
  <div class='sider-photo'>
          <img src="../assets/img/picture1.jpg" alt="">
          <img class='miniphoto' src="../assets/img/link.jpg" alt="">
          <div class='title center'>
            <h3>{{his.username}}</h3>
          </div>
          <Row class='center '>
            <div class='desc'>

              <Col span='8'>
              <div>
                <h2>{{followed_fans_list.length}}</h2>
              </div>
              <div>关注</div>

              </Col>
              <Col span='8'>
              <div>
                <h2>{{fans_list.length}}</h2>
              </div>
              <div>粉丝</div>

              </Col>
              <Col span='8'>
              <div>
                <h2>{{content_list.length}}</h2>
              </div>
              <div>微博</div>
              </Col>
            </div>
          </Row>

        </div>
</template>

<script>
import  session from "../lib/session";
import  api from "../lib/api";
export default {
  data(){
    return{

      his:{},
      content_list:[],
      followed_fans_list:[],
      fans_list:[],
    }

  },
  mounted(){
     this.his = session.uinfo();
    this.read_tweet();
    this.read_follow();
    this.read_fans();


  },
  methods:{
    
    read_tweet(){
  api('tweet/read',{where:{user_id:this.his.id},with:'has_one:user'})
  .then(r=>{
  this.content_list=r.data;
 //  console.log(this.content_list.length);
  })
},
    read_follow() {
      api("_bind__user_user/read", {
        where: { follower_id: this.his.id }
      }).then(r => {
        this.followed_fans_list = r.data;

      //  console.log(r.data);
      });
    },
    read_fans() {
      api("_bind__user_user/read", {
         where: { target_id: this.his.id } }).then(
        r => {
         // console.log(r.data);
          this.fans_list = r.data;
         // console.log(this.fans_list)
        }
      );
    }, 
  }
  
}
</script>


<style scoped>
.sider-photo,
.demo-avatar {
  background: #fff;
  margin-bottom: 5px;
}
.demo-avatar {
  padding: 10px;
}
img {
  width: 100%;
  height: 150px;
  border-radius: 3px;
}
.miniphoto {
  width: 80px;
  height: 80px;
  position: absolute;
  top: 90px;
  right: 100px;
  border-radius: 50%;
}
.title {
  margin-top: 20px;
}
</style>
