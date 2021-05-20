const SOCKET_URL = process.env.SOCKET_API_URL;
import Vue from 'vue'
import App from './App.vue'
import router from '@core/router'
import store from '@store'
import http from '@api';
import { io } from 'socket.io-client';
const socket = io(SOCKET_URL);
import VueSocketExt from 'vue-socket.io-extended';

Vue.use(VueSocketExt, socket);

Vue.prototype.$http = http;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
