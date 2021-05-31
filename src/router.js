import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Short',
      component: () => import('@views/Short.vue'),
    },
    {
      path: '/long',
      name: 'Long',
      component: () => import('@views/Long.vue'),
    },
  ],
});
