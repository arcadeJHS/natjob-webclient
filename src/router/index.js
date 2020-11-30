import { createRouter, createWebHashHistory } from 'vue-router';
import Jobs from '../views/Jobs.vue';

const routes = [
  {
    path: '/',
    name: 'Jobs',
    component: Jobs
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
