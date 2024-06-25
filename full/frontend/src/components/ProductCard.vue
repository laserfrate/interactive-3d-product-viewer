<template>
    <div class="product-card">
      <h2>{{ product.title }}</h2>
      <p>{{ product.description }}</p>
      <iframe
        :src="product.modelUrl"
        width="100%"
        height="480"
        frameborder="0"
        allow="autoplay; fullscreen; vr"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductCard',
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .product-card {
    border: 1px solid #ccc;
    padding: 16px;
    margin-bottom: 16px;
  }
  iframe {
    width: 100%;
    height: 480px;
  }
  </style>
  