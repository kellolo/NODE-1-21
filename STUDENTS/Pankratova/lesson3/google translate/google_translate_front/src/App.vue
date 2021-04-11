<template>
  <div id="app">
    <img alt="Translate logo" src="./assets/Google_Translate.png">
    <Translator msg="Welcome to Google traslator"/>
  </div>
</template>

<script>
import Translator from './components/Translator.vue'

export default {
  name: 'App',
  components: {
    Translator
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
