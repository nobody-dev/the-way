<template>
  <div :class="$style.create">
    <TheLogo :class=$style.logo />
    <CreateCharacter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheLogo from '@/components/TheLogo.vue';
import CreateCharacter from '@/components/TheCreateCharacter.vue';

export default defineComponent({
  components: {
    TheLogo,
    CreateCharacter,
  },
});
</script>

<style lang="postcss" module>
  .create {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo {
    margin-bottom: 10px;
  }
</style>
