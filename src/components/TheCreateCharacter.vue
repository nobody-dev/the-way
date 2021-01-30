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
        :items="classes"
        @change="changeClassId"
      />
      <UiSpriteImg
        :class=$style.avatar
        :img="currentAvatar"
        sprite="characters"
      />
    </div>
  </UiContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import classes from '@/constants/classes';
import { Player } from '@/core/Units/Player';
import { Unit } from '@/core/Units/Unit';

import UiContainer from './_UiBase/UiContainer.vue';
import UiTextField from './_UiBase/UiTextField.vue';
import UiTextSlider from './_UiBase/UiTextSlider.vue';
import UiSpriteImg from './_UiBase/UiSpriteImg.vue';

interface Classes {
  id: number;
  title: string;
  name: string;
}

export default defineComponent({
  components: {
    UiContainer,
    UiTextField,
    UiTextSlider,
    UiSpriteImg,
  },
  data() {
    return {
      nickname: '',
      classId: 0,
      classes,
    };
  },
  computed: {
    currentAvatar(): string | undefined {
      return classes.find((item: Classes) => item.id === this.classId)?.name;
    },
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

  .avatar {
    width: 80px;
    height: 80px;
    margin-top: 10px;
  }
</style>
