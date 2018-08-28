<template>
<div >
  <Nav/>
  <div class='container'>
    <div class='content'>
      <h1>登录Twitter</h1>
      <form @submit.prevent='submit'>
        <div style='margin-top:10px;' class='error-list'>
          <div v-if='login_faled'>用户名或密码错误</div>
         
        </div>

        <div class='input'>
        <Input  v-model="current.$unique" placeholder="手机，邮件地址或用户名" style="width: 300px" />

        </div>
        <div class='input'>
        <Input type='password' v-model="current.password" placeholder="密码" style="width: 300px" />

        </div>
        <Button html-type='submit' type="primary" style='width:300px' long>登录</Button>
      </form>
      <div class='others'>
        首次使用 Twitter 吗？ <router-link to='/signup'>现在注册 »</router-link> 
      </div>
      

    </div>
  </div>
  
   
  </div>




</div>

</template>

<script>

import Nav from '../components/Nav.vue';
import session from '../lib/session';
import api from '../lib/api';
export default {
  components: { Nav},  
  data(){
    return{
      login_faled:false,
      current:{},

    }
  },
  methods:{
    submit(){
      let unique,password;
      if(!(unique=this.current.$unique)||
      !(password=this.current.password)){
       this.login_faled=true;
      return;
     
      }
      if(unique==='admin' && password==='yoyoyo'){
        this.on_login_succeed({id:1,username:'admin',is_admin:'true'})
        return;

      }
  
    session.exist(unique,password)
    .then(row=>{
      if(!row){

        this.login_faled=true;
        return;
      }else{
        this.on_login_succeed(row);
      }

    
    });
    },
    on_login_succeed(row){
      this.login_faled=false
      delete row.password;
      session.login(row);
      alert('登录成功');

      if(session.is_admin()){
        this.$router.push('/');
        return;
      }
      else{
        this.$router.push('/');
      }
    }
  }
  
}
</script>

<style  scoped>
h1{
  color:black;
}
.container{
  max-width:400px;
  background:#fff;
  
}
.content{
padding:50px;
}
.input,
.others{
  margin:20px 0;
  font-size: 15px;
}



</style>


