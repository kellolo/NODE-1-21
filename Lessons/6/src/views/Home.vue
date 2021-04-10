<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <input type="text" v-model="login"> Login
    </div>
    <div>
      <input type="text" v-model="password"> Password
    </div>
    <button @click="loginRequest">Login</button>
    <button @click="getData">SendReq</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    loginRequest() {
      const data = {
        login: this.login,
        password: this.password
      };

      this.$store.dispatch('login', data);
    },
    getData() {
      this.$http.get('/user');
    }
  }
}
</script>
