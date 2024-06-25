<template>
  <div>
    <h1>Welcome to Interactive 3D Product Viewer</h1>
    <ProductList />
  </div>
</template>

<script>
import ProductList from '../components/ProductList.vue';

export default {
  name: 'HomePage',
  components: {
    ProductList,
  },
};
</script>
