import Vue from 'vue';
import VueRouter from 'vue-router';
// import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/404',
    name: 'Page404',
    component: () => import('../views/404.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Projects.vue'),
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: () => import('../views/Timeline.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
