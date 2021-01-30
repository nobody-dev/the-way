<template>
  <UIContainer :class="$style.header">
  </UIContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UIContainer from '@/components/_UiBase/UiContainer.vue';

export default defineComponent({
  components: {
    UIContainer,
  },
});
</script>

<style lang="postcss" module>
  .header {
    display: flex;
    width: 100%;
    height: 125px;
    margin: 10px;
  }
</style>
