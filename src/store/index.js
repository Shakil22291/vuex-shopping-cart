import Vuex from "vuex";
import Vue from "vue";
import actions from "./actions";
import products from "./modules/products";
import cart from "./modules/cart";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    cart
  },
  state: {},
  getters: {},
  actions,
  mutations: {},
});
