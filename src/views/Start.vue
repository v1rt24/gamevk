<template>
  <header class="header">
    <img class="header__logo" src="/img/logo.png" alt="логотип игры">
  </header>

  <main class="notFull flex-center">
    <div class="wrapper-content">
      <Button
          fa-icon-name="fa-play-circle-o"
          text="Начать"
          @click="goToQuestions"
      />

      <Button
          fa-icon-name="fa-trophy"
          text="Достижения"
          @click="goToAchievements"
      />

      <Button
          fa-icon-name="fa-user"
          text="Автор"
          @click="flag = 'Author'"
      />

      <Button
          :fa-icon-name="`fa-volume-${img}`"
          text="Звук"
          @click="playAudio"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import {inject} from 'vue';
import {useAudio} from '../use/audio';
import Button from '../components/Button.vue';
import {IProvide} from '../types/provide.types';

//
const {flag, score, totalGames} = inject('app') as IProvide;
const {img, playAudio} = useAudio();

//
const goToQuestions = () => {
  score.zerg = 0;
  score.primal = 0;
  score.terran = 0;
  score.infested = 0;
  score.protoss = 0;
  score.taldarim = 0;
  score.hybrid = 0;

  flag.value = 'Questions';
};

const goToAchievements = () => {
  if (totalGames.value) {
    flag.value = 'Achievements';
  } else {
    goToQuestions();
  }
};
</script>

<style scoped>
.header__logo {
  width: 200px;
}
</style>