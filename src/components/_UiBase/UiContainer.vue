<template>
  <component
    :is="tag"
    :class="$style.root"
  >
    <section :class="$style.container">
      <slot />
    </section>
  </component>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UiContainer',

  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
});
</script>

<style lang="postcss" module>
  .root {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-top: 3px solid #767676;
    border-right: 3px solid #212121;
    border-bottom: 3px solid #212121;
    border-left: 3px solid #767676;
  }

  .container {
    width: 100%;
    min-width: 320px;
    max-width: 1000px;
    margin: 0 auto;
  }
</style>
