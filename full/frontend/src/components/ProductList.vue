<template>
  <div>
    <h1>3D Models</h1>
    <AddEmbeddedForm @codeAdded="fetchProductsAndEmbeds" />
    <div class="products-container">
      <div v-for="product in products" :key="product._id" class="product-card">
        <h2>{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <iframe
          :src="product.modelUrl"
          width="100%"
          height="300"
          frameborder="0"
          allow="autoplay; fullscreen; vr"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        ></iframe>
      </div>
    </div>
    <h2>Embedded Models</h2>
    <div class="embedded-models">
      <div v-for="embed in embeds" :key="embed._id" class="embed-card" v-html="embed.code"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AddEmbeddedForm from './AddEmbeddedForm.vue';

export default {
  components: {
    AddEmbeddedForm,
  },
  data() {
    return {
      embeds: [],
    };
  },
  computed: {
    ...mapState(['products']),
  },
  methods: {
    async fetchProductsAndEmbeds() {
      try {
        await this.$store.dispatch('fetchProducts');
      } catch (error) {
        console.error('Error fetching products:', error);
      }

      try {
        const response = await fetch('http://localhost:3000/embeds');
        if (!response.ok) {
          throw new Error('Failed to fetch embeds');
        }
        this.embeds = await response.json();
      } catch (error) {
        console.error('Error fetching embed codes:', error);
      }
    },
  },
  created() {
    this.fetchProductsAndEmbeds();
  },
};
</script>

<style scoped>
.products-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product-card {
  width: 48%;
  border: 1px solid #ccc;
  padding: 16px;
  margin: 8px;
  box-sizing: border-box;
  text-align: center;
}

.iframe {
  width: 100%;
  height: 300px;
}

.embedded-models {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.embed-card {
  width: 48%;
  margin: 8px;
  box-sizing: border-box;
}
</style>
