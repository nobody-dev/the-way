<template>
  <div :class="$style.slider">
    <div
      :class=$style.arrayLeft
      @click="toPreviousItem"
    />
    <span :class=$style.title>
      {{ currentItemName }}
    </span>
    <div
      :class=$style.arrayRight
      @click="toNextItem"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

type Item = {
  id: number;
  title: string;
}

export default defineComponent({
  name: 'UiSlider',
  props: {
    value: {
      type: Number as PropType<number>,
      default: () => 0,
    },
    items: {
      type: Array as PropType<Item[]>,
      default: () => [],
    },
  },
  computed: {
    currentItemName(): string | undefined {
      return this.items.find((item) => item.id === this.value)?.title;
    },
  },
  methods: {
    toPreviousItem(): void {
      let previousValue = this.value - 1;
      if (previousValue < 0) previousValue = this.items.length - 1;

      this.$emit('change', previousValue);
    },
    toNextItem(): void {
      let nextValue = this.value + 1;
      if (nextValue > this.items.length - 1) nextValue = 0;

      this.$emit('change', nextValue);
    },
  },
});
</script>

<style lang="postcss" module>
  .slider {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .arrayLeft {
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-right: 10px solid#939393;
    border-bottom: 10px solid transparent;
    cursor: pointer;
  }

  .title {
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 20px;
    line-height: 18px;
    user-select: none;
  }

  .arrayRight {
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid #939393;
    cursor: pointer;
  }
</style>
