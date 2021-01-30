<template>
  <div :class="$style.battle">
    <h1>Battle</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {},
});
</script>

<style lang="postcss" module>
  .battle {
    display: flex;
  }
</style>
