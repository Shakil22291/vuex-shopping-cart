<template>
  <div>
    <h1>
      Product list
    </h1>
    <p v-if="loading"><b>Loading...</b></p>
    <ul v-else v-for="product in products" :key="product.id">
      <li>
        {{ product.title }} - {{ product.price | currency }} -
        {{ product.inventory }}
        <button
          :disabled="!productIsInStock(product)"
          @click="addProductToCart(product)"
        >
          Add to Cart
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import shop from "../api/shop";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "product-list",
  data() {
    return {
      loading: false
    };
  },

  computed: {
    ...mapState({
      products: state => state.products.items
    }),
    ...mapGetters('products',{
      productIsInStock: "productIsInStock"
    })
  },

  created() {
    this.loading = true;
    this.fetchProducts().then(() => (this.loading = false));
  },

  methods: {
    ...mapActions({
      fetchProducts: 'products/fetchProducts',
      addProductToCart: 'cart/addProductToCart'
    }),
  }
};
</script>

<style></style>
