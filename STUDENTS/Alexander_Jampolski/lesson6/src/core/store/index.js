import Vue from 'vue'
import Vuex from 'vuex'
import api from '@api';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: null
    },
    mutations: {
        setToken(state, t) {
            state.token = t;
        }
    },
    actions: {
        async login({dispatch, commit}, payload) {
            try {
                const res = await api.post('/user', payload);

                const {token} = res.data;
                if (token) {

                    commit('setToken', token);
                    window.localStorage.setItem('tokenGB', token);
                    api.defaults.headers.common['Authorization'] = token;
                }
            } catch (err) {
                console.log(err);
            }
        }
    },
    modules: {}
})
