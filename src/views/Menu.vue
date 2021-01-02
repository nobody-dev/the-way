<template>
  <div :class="$style.menu">
    <TheLogo :class=$style.logo />
    <UiButton
      :class="$style.button"
      text="Продолжить blablabla"
    />
    <UiButton
      :class="$style.button"
      text="Новая игра"
      @click="toNewGame"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheLogo from '@/components/TheLogo.vue';
import UiButton from '@/components/_UiBase/UiButton.vue';

export default defineComponent({
  components: {
    TheLogo,
    UiButton,
  },
  methods: {
    toNewGame() {
      this.$router.push('create');
    },
  },
});
</script>

<style lang="postcss" module>
  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo {
    margin-bottom: 50px;
  }

  .button {
    margin-bottom: 30px;
  }
</style>
