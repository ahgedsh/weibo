<template>
  <div>
    <Nav />
    <div class='container '>
      <Row class="">
        <Col span='6'offset='6'>
          <!-- <AdminNav /> -->
        </Col>
        <Col span='18'>
          <div class='content card'>
            <h2>用户列表</h2>
            <div class='tool-bar'>
              <button @click='show_form=!show_form'>创建用户</button>
            </div>
            
            <form @submit='search($event)'>
              <div class='input-control'>
                <label>搜索</label>
                <input type="search" v-model="keyword" placeholder='搜用户名/手机/邮箱' autofocus>
              </div>
              <button type='submit' hidden>搜</button>
            </form>

            <form v-if='show_form' @submit='cou($event)'>
              <div class="input-control">
                <label>用户名</label>
                <input type="text"   autocomplete="off" v-model="current.username">
                 
              </div>
              
               <div class="input-control">
                <label>电话</label>
                <input type="string"  v-model="current.phone">
                
              </div>
              <div class="input-control">
                <label>邮箱</label>
                <input type="text"  v-model="current.email">
              
              </div>
              <div class="input-control">
                <label>密码</label>
                <input type="password"  v-model="current.password">
                
              </div>
             
              
              
              <!-- <div class="input-control">
                <label>所属位置</label>
                <Location :onSelect="set_location_id"/>
              </div> -->

              <div class="input-control">
                <div class='btn-group'>
                  <button class="btn-primary" type="submit">提交</button>
                  <button type="button" @click='show_form=false'>取消</button>
                </div>

              </div>
            </form>
            <div class='table'>
              <table>
                <thead>
                  <th>用户名</th>
                  <th>电话</th>
                  <th>邮箱</th>
                 
                  <th>收货地址</th>
                  <th>操作</th>

                </thead>
                <tbody>
                  
                  <tr v-for='row in list'>
                    {{row.id}}
                 
                    <td>{{row.username}}</td>
                    <td>{{row.phone || '-'}}</td>
                    <td>{{row.email || '-'}}</td>
                    <td>{{row.location || '-'}}</td>
                    
                    

                    <td>
                      <div class="btn-group">
                        <button class="btn-small" @click="set_current(row)">编辑</button>
                        <button class="btn-small" @click="remove(row.id)">删除</button>
                      </div>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
            <!-- <Pagination :totalCount="total" :limit="limit" :onChange="on_page_change" /> -->
          </div>
        </Col>

      </Row>
    </div>
  </div>
</template>

<script>

import AdminPage from "../../mixin/AdminPage.vue";



export default {
 // components: {Location},
 mounted() {
    this.read();
    // this.set_validator_attr({
    //   name: "用户名"
    // });
  },

  
  data() {
    return {
     
      model: "user",
      searchable: ["username", "phone", "email"]
    };
  },

  methods:{
    //  set_location_id (row) {
    //     this.$set(this.current, 'location_id', row.id);
    //   },
  },
  mixins: [AdminPage]
};
</script>

<style scoped>

.input-control > *,
search {
  display: block;
  padding-bottom: 5px;
  padding-top: 10px;
}
.dib {
  display: inline-block;
  width: 3%;
}
input {
  outline: 0;
  width: 100%;
}

h2 {
  margin-top: 0;
  font-size: 16px;
}

.table {
  overflow: auto;
}

th,
td {
  padding: 5px 10px;
  text-align: left;
}

table {
  width: 100%;
  border-collapse: collapse;
}

.tool-bar{
  margin-bottom:-10px;
}
 .btn-primary

{
  background:rgb(231, 160, 160);
  border-color:rgb(231, 160, 160);
  
}
.btn-primary:hover{
      background: rgb(248, 130, 130);
      border-color: rgb(248, 130, 130);
  }
    
</style>

