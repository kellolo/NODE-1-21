<template>
  <div id="app">
    <img alt="Translate logo" src="./assets/i.png">
    <Translator msg="Google Traslate Cloud"/>
  </div>
</template>

<script>
import Translator from './components/translate.vue'

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
