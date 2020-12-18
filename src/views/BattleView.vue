<template>
  <div :class="$style.menu">
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const counter = ref(0);
    const obj = ref({ title: 'Vue 3' });

    return {
      counter,
      obj,
    };
  },
};
</script>

<style lang="postcss" module>
  .menu {
    display: flex;
    justify-content: center;
  }
</style>
