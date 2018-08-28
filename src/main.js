import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import iView from 'iview';
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








Vue.config.productionTip = false

Vue.use(Router);
Vue.use(iView);


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
  render: h => h(App),
  router,
}).$mount('#app')
