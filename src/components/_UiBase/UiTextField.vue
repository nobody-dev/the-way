<template>
  <div :class="$style.root">
    <input
      v-model="localValue"
      :class="$style.input"
      :placeholder="label"
      autocomplete="off"
      @input="input"
    >
    <button
      v-if="hasShowResetButton"
      :class="$style.reset"
      @click="resetValue"
    >
      <IconReset :class="$style.IconReset" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import IconReset from '@/assets/icons/IconReset.vue';

export default defineComponent({
  components: {
    IconReset,
  },
  props: {
    value: {
      type: [String, Number] as PropType<string | number>,
      default: '',
    },
    label: {
      type: String as PropType<string>,
      default: '',
    },
    isResettable: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  data() {
    return {
      localValue: '',
    };
  },
  computed: {
    hasShowResetButton(): string | number | false {
      return this.isResettable && this.localValue;
    },
  },
  watch: {
    value: {
      handler(value: string) {
        this.localValue = value;
      },
      immediate: true,
    },
  },
  methods: {
    input(): void {
      this.$emit('input', this.localValue);
    },
    resetValue(): void {
      this.localValue = '';
      this.$emit('clear');
    },
  },
});
</script>

<style lang="postcss" module>
  .root {
    display: flex;
  }

  .input {
    width: 100%;
    padding: 5px 10px;
    color: #939393;
    background: transparent;
  }

  .input:focus {
    outline: none;
  }

  .reset,
  .reset:focus {
    position: relative;
    top: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 0 5px;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
</style>
