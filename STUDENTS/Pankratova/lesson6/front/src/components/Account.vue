<template>
  <div v-frag>
    <button class="accountButton" @click="showAccount = !showAccount">
      My Account<i class="fa fa-caret-down" aria-hidden="true"></i>
    </button>
    <div class="dropAccount" v-show="showAccount">
      <div class="dropAccount_name" v-show="user">
        Welcome, You signed as:<span> {{ user }}</span>
      </div>
      <div class="dropAccount_message" v-show="message">
        {{ message }}
      </div>
      <label class="dropAccount_label" for="login">login</label>
      <input name="login" type="text" v-model="login" />
      <label class="dropAccount_label" for="password">password</label>
      <input name="password" type="text" v-model="password" />
      <div class="dropAccount_buttons">
        <button class="accountButton" name="login" @click="loginRequest">
          Sign in
        </button>
        <button class="accountButton" name="register" @click="loginRequest">
          Register
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import frag from "vue-frag";
import { get } from "@/core/requests";

export default {
  directives: {
    frag,
  },
  data() {
    return {
      showAccount: false,
      login: "",
      password: "",
      user: "",
      message: "",
    };
  },
  async mounted() {
    this.message = "";
    this.user = "";
    try {
      const result = await get("/api/user");
      if (result.user) this.user = result.user.login;
      else this.message = result.message;
    } catch (err) {
      this.message = "Error occurred while logging in";
      console.log(err);
    }
  },
  methods: {
    async loginRequest(event) {
      this.message = "";
      try {
        if (this.login && this.password) {
          const data = {
            login: this.login,
            password: this.password,
            action: event.target.name,
          };
          const result = await this.$store.dispatch("login", data);
          if (result.message) this.message = result.message;
          if (result.user) this.user = result.user.login;
        } else this.message = "Please enter login and password";
      } catch (err) {
        this.message = "Error occurred while logging in";
        console.log(err);
      }
    },
  },
};
</script>
