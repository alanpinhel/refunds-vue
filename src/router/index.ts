import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/refunds',
  },
  {
    path: '/refunds',
    name: 'refunds',
    component: () => import(/* webpackChunkName: "refunds" */ '../views/refunds/refunds.vue'),
  },
  {
    path: '*',
    redirect: '/refunds',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
