<template>
  <div>
    <div class="posts" v-for="post in data" v-bind:key="post.id">
      <h5>{{ post.name }} - {{ post.price }} </h5>
      <blockquote>
        {{ post.description }}
      </blockquote>
      <button @click="buy(post.id)">Купить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    data: Array
  },
  methods: {
    buy(id) {
      console.warn(id)
      this.$emit('buyBtnPressed', id);
    }
  },
};
</script>
