<template>
  <div :class="$style.game">
    <TheHeader/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from '@/components/Header/TheHeader.vue';

export default defineComponent({
  components: {
    TheHeader,
  },
});
</script>

<style lang="postcss" module>
  .game {
    display: flex;
  }
</style>
