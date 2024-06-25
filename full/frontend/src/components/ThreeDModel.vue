
<template>
  <div class="three-d-model">
    <iframe
      :src="modelUrl"
      width="100%"
      height="600px"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'ThreeDModel',
  props: {
    modelUrl: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.three-d-model {
  margin: 20px auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
