declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'vue-svg-inline-plugin' {
  const plugin: any;
  export default plugin;
}
