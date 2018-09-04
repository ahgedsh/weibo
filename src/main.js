import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import iView from 'iview';
import Vuex from 'vuex';

import 'iview/dist/styles/iview.css';

import Home from "./page/Home.vue";
import Profile from "./page/Profile.vue";
import Login from "./page/Login.vue";
import Signup from "./page/Signup.vue";

import Me from "./page/Mesetting/Me.vue";
import Account from './page/Mesetting/Account.vue';
import Message from './page/Mesetting/Message.vue';


import User from './page/admin/User.vue';
import Admin from './page/admin/Admin.vue';

import session from './lib/session';
import api from './lib/api';










Vue.config.productionTip = false

Vue.use(Router);
Vue.use(iView);
Vue.use(Vuex);

window.api=api;

const store=new Vuex.Store({
  state:{
    form:{},
    show_message:true,
    msg_list:[],
    user_list:[],
  },
  mutations:{
    show_message(state){
      state.show_message=true;
    },
    hide_message(state){
      state.show_message=false;
    },
    replace_message_list(state,list){
      Vue.set(state,'message_list',list);
    },
  },
  actions:{
    create_message({commit,state}){
      api('message/create',state.form);
    },
    read_message({commit},form){
      api('message/read',{
        sort_by:['id','up'],
        where:{form:[form,1]}
      })
      .then(r=>{
        commit('replace_massage_list',r.data);
      });
    }
  }
})


const router = new Router({
  routes: [
    { path: "/", component: Home },
    { path: "/profile", component: Profile },
    { path: "/login", component: Login },
    { path: "/signup", component: Signup },
    


    {
      path: '/mesetting/me',
      component: Me,
      children: [
        {
          path: 'account',
          component: Account,
        },
        {
          path: 'message',
          component: Message,
        },

      ],
      

    },
    {
      path:'/admin',
      component:Admin,
      children:[
        {
          path:'user',
          component:User,

        }
      ]
    }
    




  ]

})

new Vue({
  mounted(){
    setInterval(()=>{
      this.$store.dispatch('read_message',2);
    },5000);
  },

  render: h => h(App),
  router,
  store,
}).$mount('#app')
