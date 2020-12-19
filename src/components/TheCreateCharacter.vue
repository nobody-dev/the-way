<template>
  <UiContainer :class=$style.container>
    <div :class="$style.createCharacter">
      <UiTextField
        v-model="nickname"
        :class="$style.nickname"
        label="Представьтесь"
        isResettable
        @input="subNickname"
        @clear="clearNickname"
      />
    </div>
  </UiContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UiContainer from './_UiBase/UiContainer.vue';
import UiTextField from './_UiBase/UiTextField.vue';

export default defineComponent({
  components: {
    UiContainer,
    UiTextField,
  },
  data() {
    return {
      nickname: '' as string | number,
    };
  },
  methods: {
    subNickname(value: string | number) {
      this.nickname = value;
    },
    clearNickname() {
      this.nickname = '';
    },
  },
});
</script>

<style lang="postcss" module>
  .container {
    width: 40%;
    min-width: 320px;
    padding: 10px;
  }

  .createCharacter {
    display: flex;
    justify-content: center;
  }
</style>
