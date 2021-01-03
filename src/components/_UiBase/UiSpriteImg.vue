<template>
  <div :class="$style.root">
    <img
      :class="$style.sprite"
      :style="currentStyle"
      :src="currentSprite"
      alt="Avatar"
    >
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import sprites from '@/constants/spritesXY';

export default defineComponent({
  name: 'UiSpriteImg',
  props: {
    sprite: {
      type: String as PropType<string>,
      required: true,
    },
    img: {
      type: String as PropType<string>,
      required: true,
    },
  },
  computed: {
    currentSprite(): string {
      return require(`@/assets/sprites/${this.sprite}.png`);
    },
    currentStyle(): object {
      return {
        right: `${sprites[this.sprite][this.img].x}px`,
        bottom: `${sprites[this.sprite][this.img].y}px`,
      };
    },
  },
});
</script>

<style lang="postcss" module>
  .root {
    overflow: hidden;
  }

  .sprite {
    position: relative;
  }
</style>
