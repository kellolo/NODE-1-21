import Vue from 'vue'
import Vuex from 'vuex'
import { get, post, put, deleteReq } from '@/core/requests';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    basket: []
  },
  mutations: {
    basket_load: (state, payload) => {
      state.basket = payload;
    },
    basket_add: (state, item) => {
      state.basket.push(item);
    },
    basket_remove: (state, item) => {
      state.basket.splice(state.basket.indexOf(item), 1);
    },
    basket_change: (state, payload) => {
      payload.item.amount = payload.amount;
    }
  },
  actions: {
    async loadBasket({ commit }, url) { // payload - массив товаров из джейсона
      let payload = (await get(url)).content; 
      commit('basket_load', payload);
    },
    async postToBasket({ commit }, item) {
      try {
        const response = await post('/api/basket', item);
        if (response.status) {
          commit('basket_add', item);
        }
      }
      catch(err) {
        console.log(err);
      }
    },
    async deleteFromBasket({ commit }, item) {
      try {
        const response = await deleteReq('/api/basket/' + item.productId);
        if (response.status) {
          commit('basket_remove', item);
        }
      }
      catch(err) {
        console.log(err);
      }
    },
    async changeAmount({ commit }, item) {
      try {
        const response = await put('/api/basket/' + item.product.productId, item.amount);
        if (response.status) {
          commit('basket_change', { item: item.product, amount: item.amount });
        }
      }
      catch(err) {
        console.log(err);
      }
    }
  },
  getters: {
    basket_getter: state => state.basket,
  }
})
