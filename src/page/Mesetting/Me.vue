<template>
  <div>
    <Nav />
    <div class="container">
      <Row :gutter='36'>
        <Col span='5'>
          <Menu active-name="1-2" :open-names="['1']">
        <Submenu name="1">
            <template slot="title">
                <Icon type="ios-analytics" />
                账号设置
            </template>
            
                <MenuItem name="1-1">
                <router-link to='/Mesetting/me/account' >我的信息</router-link>
                </MenuItem>
                <MenuItem name="1-2">头像</MenuItem>
           
           
        </Submenu>
        <Submenu name="2">
            <template slot="title">
                <Icon type="ios-filing" />
               偏好设置
            </template>
            <MenuItem name="2-1">隐私设置</MenuItem>
            <MenuItem name="2-2"><router-link to='/Mesetting/me/message' >消息设置</router-link></MenuItem>
            <MenuItem name="2-3">屏蔽设置</MenuItem>
            <MenuItem name="2-4">偏好设置</MenuItem>
           
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-cog" />
              账号绑定
            </template>
           
        </Submenu>
        <Submenu name="4">
            <template slot="title">
                <Icon type="ios-cog" />
              我的勋章
            </template>
           
        </Submenu>
    </Menu>
        </Col>
        <Col span='19'>
          <router-view></router-view>
        </Col>
      </Row>
     
        
       
      
    </div>
    
  </div>
</template>
<script>

//import '../css/sidebar.css';
import Nav from '../../components/Nav';
// import AdminFooter from '../components/AdminFooter';
//import api from '../lib/api';
//import session from '../lib/session';
export default {
  components:{Nav},
  data(){
    return {

    }
  }
  
}
</script>
<style scoped>

.side-nav {
	background: #fff;
	margin-left: -15px;
}

.nav-item {
  color: #555;
  display: block;
  padding: 10px 20px;
}

.nav-item.active,
.nav-item.router-link-active,
.nav-item:hover {
	color: rgb(231, 160, 160);
		text-decoration: none;
}


.nav-item:hover {
	background:rgb(231, 160, 160);
	color:#fff;
	
}
</style>


