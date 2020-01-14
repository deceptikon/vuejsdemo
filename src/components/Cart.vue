<template>
  <div class="cart" v-if="cartData.length > 0">
    <div class="cart-item" v-for="cart in cartData" v-bind:key="cart.id">
      <h5>
        {{ getCartProduct(cart.product_id).name }}
        {{ cart.quantity }}
        ${{ cart.quantity * getCartProduct(cart.product_id).price }}
      </h5>
    </div>
  </div>
  <div v-else> Корзина пуста</div>
</template>

<script>
export default {
  name: 'Cart',
  props: {
    cartData: Array,
    products: Array
  },
  methods: {
    getCartProduct(id) {
      console.warn("!!!!!!!!!!!!!!!!!", id, this.products);
      if (this.products && this.products.length) {
        const theProduct = this.products.filter(p => p.id === id);
        if (theProduct) return theProduct[0];
      }
      return {};
    }
  },
};
</script>
