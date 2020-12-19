import { RouteRecordRaw } from 'vue-router';
import Create from '@/views/Create.vue';
import Menu from '../views/Menu.vue';

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
