<template>
  <MyTemplate>
    <div class="about">
      <h1>This is an !!!! page</h1>
      <v-app>
        <v-content>
          <v-container>Hello world</v-container>
        </v-content>
      </v-app>
      <button @click="onBtnClick">
        Получить данные
      </button>
      <Product
        :data="posts"
        @buyBtnPressed="buyBtnPressed"
      />
    </div>
  </MyTemplate>
</template>

<script>
import axios from 'axios';
import Product from '@/components/Product.vue';
import MyTemplate from '@/components/MyTemplate.vue'

export default {
  name: 'About',
  components: {
    Product,
    MyTemplate,
  },
  props: {
    msg: String
  },
  data() {
    return {
      // apiUrl: 'https://jsonplaceholder.typicode.com/posts',
      apiUrl: 'http://127.0.0.1:8000/api',
      test: 'test',
      posts: [],
      cart: []
    };
  },

  methods: {
    buyBtnPressed(id) {
      console.log('кнопку нажал', id);
      axios.put(`${this.apiUrl}/cart/`, { product: id })
      .then((response) => {
        console.warn('Ответ на добавление в корзину: ', response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    getData() {
      axios.get(`${this.apiUrl}/tovars/`)
      .then((response) => {
        // handle success
        console.log('Ответ: ', response);
        this.posts = response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    },
    getCart() {
      axios.get(`${this.apiUrl}/cart/`)
      .then((response) => {
        console.warn('Ответ: ', response);
        this.cart = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    onBtnClick(e) {
      this.getData();
      this.getCart();
      // eslint-disable-next-line no-console
      console.warn('button clicked', e);
      // eslint-disable-next-line no-console
      console.log('button clicked', e);
      // eslint-disable-next-line no-console
      console.error('button clicked', e);
    }

  }
}
</script>
