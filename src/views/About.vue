<template>
  <div class="about">
    <h1>This is an !!!! page</h1>
    <button @click="onBtnClick">test</button>
    <div class="posts" v-for="post in posts" v-bind:key="post.id">
      <h5>{{ post.title }}</h5>
      <blockquote>
        {{ post.body }}
      </blockquote>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'About',
  props: {
    msg: String
  },
  data() {
    return {
      apiUrl: 'https://jsonplaceholder.typicode.com/posts',
      test: 'test',
      posts: []
    };
  },

  methods: {
    getData() {
      axios.get(this.apiUrl)
      .then((response) => {
        // handle success
        // eslint-disable-next-line no-console
        console.log('Ответ: ', response);
        this.posts = response.data;
      })
      .catch(function (error) {
        // handle error
        // eslint-disable-next-line no-console
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    },
    onBtnClick(e) {
      this.getData();
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
