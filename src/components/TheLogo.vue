<template>
  <div :class="$style.content">
    <h1 :class="$style.logo">
      THEWAY
    </h1>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TheLogo',
};
</script>

<style lang="postcss" module>
  .logo {
    font-size: 100px;
    background: -webkit-linear-gradient(#eee, #333);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    user-select: none;
  }
</style>
