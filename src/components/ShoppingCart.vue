<template>
  <div>
    <h2>Shopping Cart</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price | currency }} -
        {{ product.quantity }}
      </li>
    </ul>
    <p><b>total: </b> {{ total | currency }}</p>
    <button @click="checkout">Checkout</button>
    <p v-if="checkoutStatus">{{ checkoutStatus }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "shopping-cart",
  computed: {
    ...mapGetters('cart',{
      products: "cartProducts",
      total: "cartTotal"
    }),
    ...mapState('cart',{
      checkoutStatus: state => state.checkoutStatus
    })
  },
  methods: {
    ...mapActions('cart',['checkout'])
  }
};
</script>

<style></style>
