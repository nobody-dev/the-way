<template>
  <button :class="$style.button">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { PropType } from 'vue';

export default {
  name: 'UiButton',
  props: {
    text: {
      type: String as PropType<string>,
      default: '',
    },
  },
};
</script>

<style lang="postcss" module>
  .button {
    padding: 10px 15px;
    background: -webkit-linear-gradient(#eee, #333);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .button:hover {
    transform: scale(0.97);
  }
</style>
