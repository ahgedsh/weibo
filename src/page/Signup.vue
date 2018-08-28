<template>
  <div>
    <Nav/>
    <div class='container center'>
      <div class='content'>
        <h1>注册Twitter</h1>
        <Row class='center'>
          <Button @click="signup_by = 'phone'">手机注册</Button>
          <Button @click="signup_by = 'mail'">邮箱注册</Button>

        </Row>

        <form @submit.prevent='submit()'>
          <div class='input'>
            <Input key='phone' v-if='signup_by=== "phone"' error-el="#phonp-error" v-model='current.phone' placeholder="手机号码" style="width:290px" />
          
          </div>
          <div class='input'>
            <Input key='mail' v-if='signup_by=== "mail"' error-el="#mail-error" v-model='current.mail' placeholder="邮箱号码" style="width:290px" />
          </div>
          <div class='input'>
            <Input type='text'  v-model='current.username' placeholder="用户名" style="width:290px" />
          </div>

          <div style='margin-bottom:-10px' class="input">

            <Input error-el="#code-error" v-model='current.code' placeholder="验证码" style="width: 200px" />

            <Button html-type='button' @click='send_code_sms()' :disabled='captcha.countdown !=0'>
              <span  v-if="captcha.countdown">{{captcha.countdown}}</span>
              <span v-else>获取验证码</span>
            </Button>

            <div class='error-list'>
              <div v-if='invalid_code'>验证码有误</div>
              <div id='code-error'></div>
            </div>
          </div>
          <div class='input'>
            <Input type='password' v-model='current.password' placeholder="密码" style="width:290px" />

          </div>
          <div style='margin-bottom:10px' class='input'>
            <Input type='password' v-model='current.password2' placeholder="重复密码" style="width:290px" />
             <div class='error-list'>
              <div v-if='invalid_password'>密码不一致</div>
              <div id='code-error'></div>
            </div>
          </div>
          <Button html-type='submit' type="primary" style='width:290px' long>注册</Button>

        </form>
        <div class='others'>
              已有账号？
              <router-link to='/login'>登陆 »</router-link>
            </div>

      </div>
    </div>

  </div>

  </div>

</template>

<script>
import Nav from "../components/Nav.vue";
import session from "../lib/session";
import api from "../lib/api";
export default {
  components: { Nav },
  data() {
    return {
      invalid_code: false,
      invalid_password:false,
      signup_by: "phone",

      code: null,
      captcha: {
        timer: null,
        countdown: 0
      },

      current: {
        phone: null,
        mail: null
      }
    };
  },
  methods: {
    submit() {
      this.invalid_code = this.current.code !== this.code;
      this.invalid_password=this.current.password !==this.current.password2;

      if (this.invalid_code) return;
      if(this.invalid_password) return;

      if (this.signup_by == "mail") {
        delete this.current.phone;
      } else {
        delete this.current.mail;
      }

      !this.current.username &&
        (this.current.username = this.current[this.signup_by]);

      api("user/create", this.current).then(r => {
        session.login(r.data);
        alert("注册成功");

        this.$router.push("/");
      });
    },
    send_code_sms() {
      if (this.captcha.countdown) return;

      let action, by_mail;
      this.captcha.countdown = 60;
      action = "sms";

      if ((by_mail = this.signup_by == "mail")) action = "mail";

      if (by_mail && !this.current.mail && (!by_mail && !this.current.phone))
        return;

      this.captcha.timer = setInterval(() => {
        if (this.captcha.countdown == 0) {
          clearInterval(this.captcha.timer);
          return;
        }
        this.$set(this.captcha, "countdown", this.captcha.countdown - 1);
      }, 1000);
      api(`captcha/${action}`, {
        phone: this.current.phone,
        mail: this.current.mail
      }).then(r => {
        this.code = atob(r.data.result);
      });
    }
  }
};


</script>

<style  scoped>
.others{
  margin:20px 0;
  font-size:15px;
  }
h1 {
  color: black;
  margin-bottom:10px;
}
.container {
  max-width: 400px;
  background: #fff;
}
.content {
  padding: 50px;
}
.input,
.others {
  margin: 20px 0;
  font-size: 15px;
}
.error-list {
  font-size: 12px;
  padding-top: 10px;
}
</style>


