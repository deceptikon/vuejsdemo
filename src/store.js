import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const apiUrl = 'http://127.0.0.1:8000/api';

const store = new Vuex.Store({
  state: {
    count: 0,
    products: [],
  },
  mutations: {
    increment (state) {
      state.count++
    },
    SET_PRODUCTS (state, data) {
      state.products = data;
    },
  },
  actions: {
    getProducts(context) {
      axios.get(`${apiUrl}/tovars/`)
      .then((response) => {
        // handle success
        console.log('Ответ: ', response);
        context.commit('SET_PRODUCTS', response.data);
        this.posts = response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    },
  },
});

export default store;
