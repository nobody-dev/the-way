import { RouteRecordRaw } from 'vue-router';
import Menu from '../views/Menu.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Menu',
    component: Menu,
  },
];

export default routes;
