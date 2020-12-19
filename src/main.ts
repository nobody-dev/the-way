import { createApp } from 'vue';

import devtools from '@/devtools';
import App from './App.vue';
import router from './router';
import store from './store';

import './assets/css/main.css';

createApp(App)
  .use(devtools)
  .use(store)
  .use(router)
  .mount('#app');
