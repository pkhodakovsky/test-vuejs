import { createRouter, createWebHistory } from 'vue-router';
import { HomeView, InfoView, RouteView } from '../views';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'settings',
      component: HomeView
    },
    {
      path: '/info',
      name: 'information',
      component: InfoView
    },
    {
      path: '/route',
      name: 'route',
      component: RouteView
    }
  ]
});

export default router;
