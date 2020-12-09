import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Jobs from '../views/Jobs.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
