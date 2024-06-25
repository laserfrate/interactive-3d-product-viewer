
<template>
  <nav class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #42b983;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: center;
}

.navbar a {
  color: white;
  margin: 0 15px;
  text-decoration: none;
  font-weight: bold;
}

.navbar a:hover {
  text-decoration: underline;
}
</style>
