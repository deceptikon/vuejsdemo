<template>
  <div class="products">
    <div class="item" v-for="post in data" v-bind:key="post.id">
      <h5>{{ post.name }} - {{ post.price }} </h5>
      <button @click="buy(post.id)">Купить</button>
      <blockquote>
        {{ post.description }}
      </blockquote>
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

<style scoped>
.products {

}
.item {
  display: inline-block;
  border: 1px solid orange;
  border-radius: 5px;
  width: 100px;
  height: 100px;
  background: #FFF;
  padding: 5px;
  margin: 5px;
  overflow: hidden;
}
</style>