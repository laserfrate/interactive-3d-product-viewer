
<template>
  <div class="project-detail">
    <h1>{{ project.name }}</h1>
    <p>{{ project.description }}</p>
    <ThreeDModel :modelUrl="project.modelUrl" />
  </div>
</template>

<script>
import ThreeDModel from '../components/ThreeDModel.vue';

export default {
  name: 'ProjectDetail',
  components: {
    ThreeDModel,
  },
  data() {
    return {
      project: {
        name: 'Sample Project',
        description: 'This is a detailed description of the sample project.',
        modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb', // Replace with actual model URL
      },
    };
  },
};
</script>

<style scoped>
.project-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
}

.project-detail h1 {
  font-size: 2em;
  margin-bottom: 10px;
}

.project-detail p {
  font-size: 1.2em;
  margin-bottom: 20px;
}
</style>
