<template>
  <TemplateWrapper>
    <template v-slot:sidebar>
      <button @click="onBtnClick">
        Получить данные
      </button>
      <!-- <Cart :cartData="cart" :products="products"/> -->
      <div class="clear" />
    </template>
    <div class="shop">
      <Product
        :data="products"
        @buyBtnPressed="buyBtnPressed"
      />
    </div>
  </TemplateWrapper>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
import Product from '@/components/Product.vue';
// import Cart from '@/components/Cart.vue';
import TemplateWrapper from '@/components/MyTemplate.vue'

export default {
  name: 'About',
  components: {
    Product,
    // Cart,
    TemplateWrapper,
  },
  props: {
    msg: String
  },
  mounted() {
    // this.getData();
    // this.getCart();
  },
  computed: {
    ...mapState(['products']),
  },
  data() {
    return {
      // apiUrl: 'https://jsonplaceholder.typicode.com/posts',
      apiUrl: 'http://127.0.0.1:8000/api',
      test: 'test',
      // products: [],
      cart: []
    };
  },

  methods: {
    mapCart(badCart) {
      const goodCart = badCart.map(record => {
        return {
          quantity: record.fields.quantity,
          product_id: record.fields.product
        };
      });
      return goodCart;
    },
    buyBtnPressed(id) {
      console.log('кнопку нажал', id);
      axios.put(`${this.apiUrl}/cart/`, { product: id })
      .then((response) => {
        console.warn('Ответ на добавление в корзину: ', response);
        const prods = JSON.parse(response.data.data);
        const goodProds = this.mapCart(prods);
        this.cart = goodProds;
        // this.getCart();
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
        this.products = response.data;
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
      // this.getData();
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

<style scoped>
.clear {
  clear:both;
}
</style>
