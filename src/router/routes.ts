import { RouteRecordRaw } from 'vue-router';
import Create from '@/views/TheCreate.vue';
import Menu from '../views/TheMenu.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Menu',
    component: Menu,
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
  },
];

export default routes;
