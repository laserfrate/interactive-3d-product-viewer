import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
  state: {
    products: [],
    user: null,
  },
  mutations: {
    // Mutation to set products
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    // Mutation to set user information
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    // Action to fetch products from an API
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get('http://localhost:3000/api/products');
        commit('SET_PRODUCTS', response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    // Action to set user information
    setUser({ commit }, user) {
      commit('SET_USER', user);
    },
  },
  modules: {
    // Examples ( not used . just for learning )
    cart: {
      state: {
        items: [],
      },
      mutations: {
        ADD_TO_CART(state, product) {
          state.items.push(product);
        },
        REMOVE_FROM_CART(state, productId) {
          state.items = state.items.filter(item => item.id !== productId);
        },
      },
      actions: {
        addToCart({ commit }, product) {
          commit('ADD_TO_CART', product);
        },
        removeFromCart({ commit }, productId) {
          commit('REMOVE_FROM_CART', productId);
        },
      },
    },
  },
});
