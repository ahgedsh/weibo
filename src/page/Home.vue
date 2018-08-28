<template>
  <div>
    <Nav />
    <div class='container'>
      <Row :gutter='16'>
        <Col span='6'>
        <!-- <div class='sider-photo'>
          <img src="../assets/img/picture1.jpg" alt="">
          <img class='miniphoto' src="../assets/img/link.jpg" alt="">
          <div class='title center'>
            <h3> {{his.username}}</h3>
          </div>
          <Row class='center '>
            <div class='desc'>

              <Col span='8'>
              <div>
                <h2>{{followed_list.length}}</h2>
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
                <h2>{{content.length}}</h2>
              </div>
              <div>微博</div>
              </Col>
            </div>
          </Row>

        </div> -->
        <span>

          <Profilecard style='width:265px;' />
        </span>

        <Card class='card' :dis-hover="true" :bordered="false">

          <p slot="title">Trends for you</p>
          <div>Content of no border tydive.</div>
          <div> Content of no border tydive. </div>
          <div>Content of no border tydive. Content of no border tydive. </div>
        </Card>

        </Col>
        <Col span='12'>
        <div class="demo-avatar">
          <Row>
            <Col span='3'>
            <Avatar style='margin-left:25px;margin-right:15px;' icon="ios-person" />
            </Col>
            <Col span='21'>
            <form @submit.prevent='submit()'>
              <Input :disabled="!his.id" v-model="form.content" type="textarea" placeholder="Enter something..." />
              <Row class='icon' style='margin-top:5px'>
                <Col span='20'>
                <input type="file" @change="upload" id="uploader">
                </Col>

                <div class='right'>

                  <Col span='4'>
                  <Button html-type='submit' type="primary" shape="circle" ghost>发布</Button>
                  </Col>

                </div>

              </Row>
            </form>

            </Col>
          </Row>

        </div>

        <Tweet :row='it' v-for='it in timeline' />

        </Col>
        <Col span='6'>
        <Card>
          <p slot='title'>Who to follow · Refresh · View all</p>
          <Row v-for='it in user_list'>
            <Col span='5'>
            <div>
              <Avatar size="large" src='https://tva4.sinaimg.cn/crop.0.0.996.996.180/006qLr31jw8fbenawtej8j30ro0ro42g.jpg' />
            </div>
            </Col>
            <Col span='19'>
            <div style='font-size:16px;'>{{it.username}}
              <span style='font-size:13px;color:gray'>@BraveUkraine</span>
            </div>
            <div style='font-size:14px;'>{{it.bio ||'关注懒癌患者'}}</div>
            <div style='margin-bottom:10px;'>
              <p v-if='his.id'>

                <Button v-if='has_followed(it.id)' @click='unfollow(it)' size='small' type="primary" shape="circle" ghost>取消关注</Button>
                <Button v-else @click='follow(it)' size='small' type="primary" shape="circle" ghost>关注</Button>
              </p>
              <p v-else>
                <Button to='/Login' size='small' type="primary" shape="circle" ghost>关注</Button>
              </p>
            </div>
            </Col>
            <Divider />
          </Row>

          <div>find people you know</div>

        </Card>

        <Card class='card' :dis-hover="true" :bordered="false">
          <p>© 2018 TwitterAboutHelp CenterTermsPrivacy policyCookiesAds infoBrand BlogStatus AppsJobs Marketing BusinessesDevelopers</p>

        </Card>

        </Card>
        </Col>
      </Row>
    </div>
  </div>
</template>
<script>
import "../css/profilecard.css";

import Nav from "../components/Nav.vue";
import Profilecard from "../components/Profilecard.vue";
import Tweet from "../components/Tweet.vue";

import session from "../lib/session";
import api from "../lib/api";

export default {
  components: { Nav, Tweet, Profilecard },
  data() {
    return {
      visible: false,
      his: {},
      form: {
        picture: ""
      },
      list: [],
      timeline: [],
      user_list: [],
      followed_list: [],
      imageSrc: ""
    };
  },
  mounted() {
    this.his = session.uinfo();

    this.read_user();

    if (session.logged_in()) {
      this.read_followed()
        .then(r => this.read_timeline())
        .then(() => {
          this.readOldValue();
        });
    } else {
      // this.read_timeline_public();
    }
  },
  methods: {
    submit() {
      console.log(1);
      this.form.user_id = this.his.id;
      this.form.picture = this.imageSrc;
      console.log(this.his.id);

      api("tweet/create", this.form).then(r => {
        (this.form = {}), this.list.push(r.data);
        this.read_timeline();
      });
    },
    read_followed() {
      return api("user/find", {
        id: this.his.id,
        with: [
          {
            relation: "belongs_to_many",
            model: "user"
          }
        ]
      }).then(r => {
        this.followed_list = r.data.$user;
        // console.log(r.data.$user);
      });
    },
    read_timeline() {
      return api("tweet/read", {
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

    read_user() {
      api("user/read", { where: [["id", "!=", "his.id"]] }).then(r => {
        this.user_list = r.data;
      });
    },

    readOldValue(list) {
      this.timeline.forEach(item => {
        if (item.tweet_form) {
          api("tweet/find", { id: item.tweet_form }).then(
            r => (item.oldvalue = r.data.content)
          );
        }
      });
      console.log(this.timeline);
    },

    follow(user) {
      api("user/bind", {
        model: "user",
        glue: {
          [this.his.id]: user.id
        }
      }).then(r => {
        // console.log(r.data);
        this.read_followed();
      });
    },
    unfollow(user) {
      api("user/unbind", {
        model: "user",
        glue: {
          [this.his.id]: user.id
        }
      }).then(r => {
        this.read_followed();
      });
    },
    has_followed(target_id) {
      if (!this.followed_list) return false;

      return !!this.followed_list.find(user => {
        return user.id == target_id;
      });
    },
    upload() {
      const uploader = document.getElementById("uploader");

      let file = uploader.files[0];
      let fd = new FormData();
      fd.append("file", file);
      fd.append("name", "my-file.jpg");

      api("_file/create", fd).then(r => {
        let data = r.data;
        console.log(r.data);
        this.imageSrc = "http://" + data._base_url + "/" + data._key;
      });
    }
  }
};
</script>

<style scoped>
.icon {
  position: relative;
}
.add-bottom {
  position: absolute;
  right: 0;
}

.container {
  max-width: 1100px;
}
</style>




