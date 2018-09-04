<template>
  <div>
    <Row class='nav'>
      <Col span='2'>LOGO</Col>
      <Col span='8'>
      <Input class='input' search placeholder="Enter something..." />
      </Col>

      <Col span='11' offset='3'>
      <Menu mode="horizontal"  >
        <MenuItem name="1">
        <Icon type="ios-paper" />
        <router-link to='/' class='item'>首页</router-link>
        </MenuItem>
       
      
        <MenuItem to='/profile' name='profile'>
        <Icon type="ios-people" /> 
        个人主页
        </MenuItem>
        <Submenu name="3">
            <template slot="title">
              <Icon type="ios-stats"  />
              <span @click='set_noti_as_read()'>消息</span>
              <span v-if='noti_count'>{{noti_count}}</span>
                 
            </template>
            <MenuGroup title="使用">
               <MenuItem v-for='it in noti_list' name='3-1'>{{it.$$content}}</MenuItem>
              <!-- <MenuItem name="3-2">活跃分析</MenuItem>
              <MenuItem name="3-3">时段分析</MenuItem> -->
            </MenuGroup>
            <!-- <MenuGroup title="留存">
              <MenuItem name="3-4">用户留存</MenuItem>
              <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup> -->
          </Submenu>
        <MenuItem  to="/mesetting/me/account" name="person"> 个人管理
        </MenuItem>
        <MenuItem v-if='!session.logged_in()' to="/login" name="login"> 登录
        </MenuItem>
        <MenuItem v-if='!session.logged_in()' to="/signup" name="singup"> 注册
        </MenuItem>
        <MenuItem v-else name='username'> {{session.uinfo().username ||session.uinfo().phone}}
        </MenuItem>
        <MenuItem v-if="session.logged_in()" @click.native="session.logout('#/login')" name="logout"> 登出
        </MenuItem>

      </Menu>

      </Col>

    </Row>
  </div>
</template>
<script>
import "../main.css";
import session from "../lib/session";
import api from "../lib/api";
export default {
  data() {
    return {
     
      session,
      noti_list:[],
      noti_count:null,
       current:{},
       form:{},
    };
  },
  mounted(){
    //this.create();
   //this.create_tpl();
 // this. resert()
   this.count_noti()
  },
  methods:{
    // create(){
    //   this.current.user_id=session.uinfo().id,
    //   this.current.type_id=20,
    //   api('noti/create',this.current)
    //   .then(r=>{
    //     console.log(r.data)
    //   })
    // },
    // create_tpl(){
    //   this.form.content='您于{{date}}充值了{{fee}}元',
    //   this.form.name='金额'
    //   this.form.id=3
    //   api('noti_tpl/create',this.form)
    //   .then(r=>{
    //     console.log(r.data);
    //   })
      

    // }
    count_noti(){
      api('noti/read',{
        where:{
          user_id:session.uinfo().id,
          status:'unread',
        },
        with:{
          relation:'belongs_to',
          model:'noti_tpl',
          foreign_key:'type_id',
          as:'tpl',
        }
       
        
      }).then(r=>{
          this.noti_count = r.total ;
             this.noti_list  = r.data ;
             console.log(this.noti_count);
             console.log(this.noti_list);
             this.insert_all_param();
           
 	       

    })
     
    },
    resert(){

      api('noti/update',{id:4,status:'unread'}
      // { id:4,param:{date:'2018-8-8',fee:5} }
      )
    },
    set_noti_as_read(){
     console.log('1:',1)
     
      this.noti_list.forEach(it=>{
        it.status='read';
        api('noti/update',it);
       

      })
        this.count_noti();
     

    },
    insert_all_param(){
      if(this.noti_list==null)return;
   
      this.noti_list.forEach(it=>{
        it.$$content=this.insert_param(it.$tpl.content,it.param);
        
      })
    },
    insert_param(text,param){
      console.log(param)
      
      // if(!param)
      // return text;
       const re = /{{([^}]+)}}/;
 	        let r;

 	
 	        while (r = re.exec(text)) {
             console.log(r)
             
 	          let value = param[ r[ 1 ] ];
           
 	          text      = text.replace(r[ 0 ], value);
 	          r.index   = 0;
 	        }
           return text;
 	

    }
   
  }
};
</script>
<style scoped>
.nav {
  background: #fff;
  margin-bottom: 15px;
}

.input {
  margin-top: 15px;
}
</style>
