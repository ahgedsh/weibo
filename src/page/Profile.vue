<template>
<div>
  <Nav />
  <div class='container'>
    <!-- <Row>
      <Col span="12" offset="10">
      <img class='miniphone' src="../assets/img/link.jpg" alt="">

      </Col>
      <Col span='11' offset='5'>
      <div style='padding-left:45px' class='title center'>
        AAAAAA
      </div>
      </Col>
      <Col span='12' offset='5'>
      <div class=' center'>
        <h3>一句话介绍自己吧，让别人更了解你</h3>
      </div>
      </Col>
    </Row> -->
    <Row class='profilenav'>
     
      <Col span='3' offset='5' class='center'>我的主页</Col>
      <Col span='3'offset='2' class='center'>我的相册</Col>
      <Col span='3' offset='2' class='center' >管理中心</Col>
    </Row>
    <Row :gutter='16'>
      <Col span='8'>
        <!-- <Row class='center '>
          <div class='sider-photo'>
          <img class='photo' src="../assets/img/picture1.jpg" alt="">
          <img class='miniphoto' src="../assets/img/link.jpg" alt="">
          <div class='title center'>
            <h3>{{his.username}}</h3>
          </div>
          <Row class='center '>
            <div class='desc'>

              <Col span='8'>
              <div>
                <h2>150</h2>
              </div>
              <div>关注</div>

              </Col>
              <Col span='8'>
              <div>
                <h2>50</h2>
              </div>
              <div>粉丝</div>

              </Col>
              <Col span='8'>
              <div>
                <h2>{{this.timeline.length}}</h2>
              </div>
              <div>微博</div>
              </Col>
            </div>
          </Row>

          </div>

         
        </Row> -->
        <Profilecard />

        <Card style='margin:10px 0' >
          
          <div style='margin:10px 0;' > 申请认证
            <Divider type="vertical" />
          </div>
           
            <div class='person'>个人资料完成度<span style='font-size:16px;'>45%</span>
                 <div>   <Progress :percent="45" /></div>
            </div>
           <hr>
          
          
          <div class='center'>编辑个人资料 ></div>
          

      
                
        </Card>
        <Card style='margin:10px 0' >
      
         <h3 style='margin-bottom:10px'>赞</h3>          
         <Row>
           <Col span='8'>
           <img style='width:80px;height:80px;margin-top:10px;' src="../assets/img/person1.jpg" alt="">
           </Col>
           <Col span='16'>
           <div class="title">Tiger公子</div>
           <div>小伙伴们为什么不提醒我，现在国内比泰国还热啊…一出机场我就晒成一摊… ​​​​</div>

           
           </Col>
           
         </Row>
         <hr>
         <div class='center'>查看更多></div>
        </Card>
      
      

      </Col>
      <Col span='16'>
      <Row class='mainnav'>
        <span>
          <Col span='4' style='padding-top:5px;'>全部</Col>
          <Col span='4' style='padding-top:5px;'>
          <Dropdown>
            <a href="javascript:void(0)">
              下拉菜单
              <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem>驴打滚</DropdownItem>
              <DropdownItem>炸酱面</DropdownItem>
              <DropdownItem disabled>豆汁儿</DropdownItem>
              <DropdownItem>冰糖葫芦</DropdownItem>
              <DropdownItem divided>北京烤鸭</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          </Col>

        </span>
        

        <Col span='8' offset='6'>
        <Input suffix="ios-search" size="small" placeholder="Enter text" style="width:230px" />
        </Col>
      </Row>
      <!-- <Card style='margin:10px 0' >
        <Row class='personcard'>
          <Col span='3'>
            <img class='personphoto' src="../assets/img/link.jpg" alt="">

          </Col>
          <Col span='20'>
          <div class="title">
            AAAAAAA
          </div>
          <div style='font-size:12px'>今天00：01 来自 微博 weibo.com</div>
          <div>我刚换了“雨夜”套装，好漂亮，你们都快来试试！ //weibo.com/home?skinId=skin055 </div>
          <div>
            <img style='width:300px;margin:20px 0' src="../assets/img/picture2.jpg" alt="">
          </div>
          </Col>

        </Row>
        <Row class='center read'>
          <Col span='6'> 阅读 56 推广 </Col>
          <Col span='6'> <Icon size='20' type="ios-send-outline" />转发</Col>
          <Col span='6'> <Icon  type="ios-heart-outline" />赞</Col>
          <Col span='6'> <Icon type="ios-chatboxes-outline" />评论</Col>
        </Row>
      

      </Card> -->
      <Tweet  :row='it' v-for='it in timeline' />
      <Card style='margin:10px 0' >
      
         <h3>A high quality UI Toolkit based on Vue.js</h3>        
      </Card>

      </Col>
    </Row>

  </div>

</div>

</template>
<script>
import  '../css/profilecard.css';
import Nav from '../components/Nav.vue';
import Profilecard from '../components/Profilecard.vue';

import Tweet from '../components/Tweet.vue';
import api from "../lib/api";
import session from "../lib/session";

export default {  
 components: { Nav,Tweet,Profilecard}, 
 data(){
   return{
     timeline:[],
     his:{},
   }
 },
 mounted(){
     this.his = session.uinfo();
   // console.log(this.his)
   this.read_tweet();
  


 },
 methods:{
read_tweet(){
  api('tweet/read',{where:{user_id:this.his.id},with:'has_one:user'})
  .then(r=>{
  this.timeline=r.data;
 // console.log(this.timeline);
  })
}
 }
 
  
}
</script>

<style scoped>
.sider-photo,
.photo{
  width:287px;
}
.container {
  max-width: 900px;
}

.miniphone {
  width: 90px;
  height: 90px;
  
}
.personphoto,
.miniphone{
  border-radius: 50%;

}
.personphoto{
  width:60px;
  height:60px;
}
.profilenav {
  padding: 10px;
  margin: 15px 0px;
}
.profilenav>*:hover{
  color:#2d8cf0;
}
.desc,
.profilenav,
.mainnav {
  background: #fff;
}
.desc > * {
  border-left: 1px solid rgb(230, 229, 229);
  margin-top: -20px;
}
.desc > *:first-child {
  border: none;
}
.desc {
  padding: 30px 0;
}
.mainnav {
  padding: 5px;
}
.person{
  padding:10px 0;
}
hr{
 
  margin:10px 0;
}

</style>

