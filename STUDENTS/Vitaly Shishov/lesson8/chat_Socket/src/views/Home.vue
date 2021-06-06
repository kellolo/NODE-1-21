<template>
  <div class="chat">
    <Account />
    <h2>
      <span>{{ userLogin }}</span> Welcome to Chat!
    </h2>
    <div class="chatList" ref="chatList">
      <Item v-for="item of items" :key="item.id" :item="item" @del="delMsg" />
    </div>
    <form class="chatInput">
      <input
        type="text"
        placeholder="print message"
        v-model="newText"
        ref="inputMsg"
      />
      <button :disabled="!newText" @click="sendMsg"><b>Send</b></button>
    </form>
  </div>
</template>

<script>
import Item from "@components/Item.vue";
import Account from "@components/Account.vue";
import { mapGetters } from "vuex";
import api from "@api";

export default {
  name: "Home",
  components: { Item, Account },
  data() {
    return {
      items: [],
      newText: "",
    };
  },
  async mounted() {
    try {
      const res = await api.get("/chat");
      const { result } = res.data;
      if (result) {
        this.items = result;
      }
    } catch (err) {
      console.log(`==> get messages failure ` + err);
    }
  },
  updated() {
    const chatListEl = this.$refs.chatList;
    chatListEl.scrollTop = chatListEl.scrollHeight;
    this.$refs.inputMsg.focus();
  },
  methods: {
    async sendMsg() {
      try {
        this.$socket.client.emit("send", {
          text: this.newText,
          user: this.userLogin,
          date: new Date().toISOString().slice(0, 19).replace("T", " "),
        });
      } catch (err) {
        console.log("==> add message failure " + err);
      }
    },
    async delMsg(id) {
      try {
        const result = await api.delete("/chat" + id);
        const { status } = result.data;
        if (status == "ok") {
          const idx = this.items.findIndex((el) => el.id === id);
          if (idx !== -1) {
            this.items.splice(idx, 1);
          }
        }
      } catch (err) {
        console.log("==> delete message failure " + err);
      }
    },
  },
  computed: {
    ...mapGetters({ userLogin: "userLogin_getter" }),
  },
};
</script>

<style lang="scss">
$mainColor: rgb(233, 59, 126);
body {
  background: radial-gradient(
      circle,
      rgba(rgb(255, 255, 255), 0.6) 0%,
      rgba(rgb(61, 49, 57), 0.7) 100%
    ),
    url("../assets/bg1.png") center center / 50% repeat;
}
.chat {
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 10px;
  h2 {
    text-align: center;
    span {
      color: $mainColor;
    }
  }
}
.chatInput {
  margin: 0 auto;
  height: 36px;
  width: 60%;
  margin-top: 20px;
  display: flex;
  input {
    width: 100%;
    border: 1px solid white;
    border-right: none;
    padding: 0 10px;
    outline: none;
  }
  button {
    width: 100px;
    color: white;
    background-color: $mainColor;
    border: 1px solid white;
    outline: none;
    font-size: 15px;
    &:hover {
      background-color: white;
      color: $mainColor;
      border-color: $mainColor;
      cursor: pointer;
    }
  }
}
.chatList {
  height: 66vh;
  margin: 0 auto;
  width: 60%;
  overflow-y: auto;
}
</style>
