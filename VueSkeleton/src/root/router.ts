import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/modules/home/home.vue';
import loginRoutes from '@/modules/login/routes';
import employeeRoutes from '@/modules/employee/routes';


Vue.use(Router);

const appRoutes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  ...loginRoutes,
  ...employeeRoutes
]


export default new Router({
  routes: [
    ...appRoutes
  ],
});
