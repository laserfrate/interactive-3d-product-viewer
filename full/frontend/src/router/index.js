
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ProjectList from '../pages/ProjectList.vue';
import ProjectDetail from '../pages/ProjectDetail.vue';
import AboutPage from '../pages/AboutPage.vue';
import ContactPage from '../pages/ContactPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/projects', name: 'ProjectList', component: ProjectList },
  { path: '/projects/:id', name: 'ProjectDetail', component: ProjectDetail, props: true },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/contact', name: 'Contact', component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
