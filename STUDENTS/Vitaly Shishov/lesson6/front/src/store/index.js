import Vue from 'vue'
import Vuex from 'vuex'
import { get, post, put, deleteReq } from '@/core/requests';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        basket: [],
        token: ''
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
        },
        setToken: (state, token) => {
            state.token = token;
        }
    },
    actions: {
        async loadBasket({ commit }, url) {
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
            catch (err) {
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
            catch (err) {
                console.log(err);
            }
        },
        async changeAmount({ commit }, item) {
            try {
                const response = await put('/api/basket/' + item.productId, item);
                if (response.status) {
                    commit('basket_change', { item, amount: item.amount });
                }
            }
            catch (err) {
                console.log(err);
            }
        },
        async login({ dispatch, commit }, user) {
            try {
                const response = user.action === 'register' ?
                    await post('/api/user', user) :
                    await put('/api/user', user);
                if (response.token) {
                    commit('setToken', response.token);
                    window.localStorage.setItem('tokenAuth', response.token);
                }
                return response;
            }
            catch (err) {
                console.log(err);
                return null;
            }
        }
    },
    getters: {
        basket_getter: state => state.basket,
    }
})
