<template>
  <div class="chat">
    <h1>This is an about page</h1>
    <div class="chat__window">

    </div>
    <div class="chat__controls">
      <input type="text" v-model="text">
      <button @click="send" :disabled="!text">send</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ''
    };
  },
  methods: {
    async send() {
      try {
        this.$socket.client.emit('send', { 
          message: this.text, 
          user: 'user1', 
          date: '' + (Date.now()) 
        });
      }
      catch(err){
        console.log(err);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.chat {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__window {
    border: 1px solid black;
    width: 100%;
    height: 500px;
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
    .msg {
      width: 100%;
      height: 80px;
      border: 1px solid black;
    }
  }
  &__controls {
    width: 100%;
    display: flex;
    justify-content: space-between;
    input {
      width: 80%;
    }
    button {
      width: 20%;
    }
  }
}
</style>