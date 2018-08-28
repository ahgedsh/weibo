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
        <MenuItem name="2">
        <Icon type="ios-people" /> 
        <router-link to='/profile' class='item'>个人主页</router-link>
        </MenuItem>
        <!-- <Submenu name="3">
            <template slot="title">
              <Icon type="ios-stats"  /> 个人管理
            </template>
            <MenuGroup title="使用">
              <MenuItem name="3-1">新增和启动</MenuItem>
              <MenuItem name="3-2">活跃分析</MenuItem>
              <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
              <MenuItem name="3-4">用户留存</MenuItem>
              <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
          </Submenu> -->
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
export default {
  data() {
    return {
      theme1: "light",
      session
    };
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
