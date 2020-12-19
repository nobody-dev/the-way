/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { App, Plugin } from 'vue';

// This code fix actual Vue 3 issue with vue devtoos
const devtools: Plugin = {
  install(app: App) {
    // @ts-ignore
    if (process.env.NODE_ENV === 'development' && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
    // @ts-ignore
      window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app;
    }
  },
};

export default devtools;
