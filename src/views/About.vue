<template>
  <MyTemplate>
    <div class="about">
      <h1>This is an !!!! page</h1>
      <v-app>
        <v-content>
          <v-container>
            <button @click="onBtnClick">
              Получить данные
            </button>
            <Product
              :data="posts"
              @buyBtnPressed="buyBtnPressed"
            />
          </v-container>
        </v-content>
      </v-app>
    </div>
  </MyTemplate>
</template>

<script>
import { mapState } from 'vuex';
import Product from '@/components/Product.vue';
import MyTemplate from '@/components/MyTemplate.vue'

export default {
  name: 'About',
  components: {
    Product,
    MyTemplate,
  },
  created() {
    console.warn('about created', this.$store);
  },
  computed: {
  //   posts() {
  //     return this.$store.state.products;
  //   },
    ...mapState({
      posts: 'products',
    })
  },
  data() {
    return {
      // apiUrl: 'https://jsonplaceholder.typicode.com/posts',
      apiUrl: 'http://127.0.0.1:8000/api',
      test: 'test',
      cart: []
    };
  },
  methods: {
    buyBtnPressed(e) {
      console.warn('buyBtnPressed:', e);
    },
  },
}
</script>
