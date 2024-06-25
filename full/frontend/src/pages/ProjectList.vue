
<template>
  <div class="project-list">
    <h1>Projects</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">
        <router-link :to="{ name: 'ProjectDetail', params: { id: project.id } }">
          {{ project.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProjectList',
  data() {
    return {
      projects: [
        { id: 1, name: 'Sample Project 1' },
        { id: 2, name: 'Sample Project 2' },
      ],
    };
  },
};
</script>

<style scoped>
.project-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
}

.project-list h1 {
  font-size: 2em;
  margin-bottom: 10px;
}

.project-list ul {
  list-style-type: none;
  padding: 0;
}

.project-list li {
  font-size: 1.2em;
  margin-bottom: 10px;
}
</style>
