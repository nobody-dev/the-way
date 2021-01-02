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
      <UiTextSlider
        :class=$style.class
        :value="classId"
        :items="[{id: 0, title: 'Маг'}, {id: 1, title: 'Воин'}]"
        @change="changeClassId"
      />
    </div>
  </UiContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UiContainer from './_UiBase/UiContainer.vue';
import UiTextField from './_UiBase/UiTextField.vue';
import UiTextSlider from './_UiBase/UiTextSlider.vue';

export default defineComponent({
  components: {
    UiContainer,
    UiTextField,
    UiTextSlider,
  },
  data() {
    return {
      nickname: '',
      classId: 0,
    };
  },
  methods: {
    subNickname(value: string) {
      this.nickname = value;
    },
    clearNickname() {
      this.nickname = '';
    },
    changeClassId(id: number) {
      this.classId = id;
    },
  },
});
</script>

<style lang="postcss" module>
  .container {
    width: 40%;
    min-width: 320px;
    padding: 30px 10px;
  }

  .createCharacter {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .nickname {
    width: 200px;
    margin-bottom: 30px;
  }

  .class {
    width: 200px;
  }
</style>
