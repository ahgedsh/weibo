<template>
  <div id="app">
   <router-view></router-view> 
     <Message />
  </div>
</template>

<script>
import Message from "./components/Message.vue";



export default {
  name: 'app',
  components: {
    Message
   
  }
}
</script>

<style>

</style>
