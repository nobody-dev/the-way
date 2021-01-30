import { RouteRecordRaw } from 'vue-router';
import Create from '@/views/TheCreate.vue';
import Menu from '../views/TheMenu.vue';
import World from '../views/TheWorld.vue';
import Battle from '../views/TheBattle.vue';
import Game from '../views/TheGame.vue';

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
  {
    path: '/game',
    name: 'Game',
    component: Game,
    children: [
      {
        path: '/world',
        component: World,
      },
      {
        path: '/battle',
        component: Battle,
      },
    ],
  },
];

export default routes;
