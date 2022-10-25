<template>
  <header class="header">
    <div class="header__number"># {{ number + 1 }}</div>
    <div class="header__question">{{ questions[number][0] }}</div>
  </header>

  <main class="notFull">
    <div class="wrapper-content">
      <Button
          v-for="(question, idx) in questions[number][1]"
          :key="question"
          :text="question"
          @click="questionHandler(questions[number][2][idx])"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import {ref, inject} from 'vue';
import {questions} from '../assets/db.json';
import Button from '../components/Button.vue';
import {IProvide} from '../types/provide.types';
import {LocalStorageUtil} from '../utils/localStorageUtil';

//
const sc2TotalGame = import.meta.env.VITE_sc2TotalGame;
const sc2TotalGames = import.meta.env.VITE_sc2TotalGames;

//
const {flag, score, totalGame, totalGames, goToResult} = inject('app') as IProvide;

//
const number = ref(0);

//
const endGame = () => {
  totalGames.value++;
  LocalStorageUtil.set(sc2TotalGames, totalGames.value);

  // Зерг
  if (score.zerg > score.protoss
      && score.zerg > score.terran
      && score.primal < 8
      && Math.abs(score.protoss - score.zerg) > 3
  ) {
    totalGame.value.zerg++;
    goToResult('zerg');
  }
  // Изначальный
  else if (score.primal > score.protoss
      && score.primal > score.terran
      && score.primal === 8
  ) {
    totalGame.value.primal++;
    goToResult('primal');
  }
  // Протосс
  else if (score.protoss > score.zerg
      && score.protoss > score.terran
      && score.taldarim < 5
      && Math.abs(score.protoss - score.zerg) > 3
  ) {
    totalGame.value.protoss++;
    goToResult('protoss');
  }
  // Талдарим
  else if (score.protoss > score.zerg
      && score.protoss > score.terran
      && score.taldarim === 5
  ) {
    totalGame.value.taldarim++;
    goToResult('taldarim');
  }
  // Терран
  else if (score.terran > score.zerg
      && score.terran > score.protoss
  ) {
    totalGame.value.terran++;
    goToResult('terran');
  }
  // Гибрид
  else if (Math.abs(score.protoss - score.zerg) <= 3) {
    totalGame.value.hybrid++;
    goToResult('hybrid');
  }
  // Заражённый терран
  else {
    totalGame.value.infested++;
    goToResult('infested');
  }

  LocalStorageUtil.set(sc2TotalGame, totalGame.value);
};

const questionHandler = (question: string) => {
  if (number.value === 24) {
    number.value = 0;
    endGame();
  } else {
    number.value++;
    eval(question);
  }
};
</script>

<style scoped>
.header__number {
  font-size: 24px;
  margin-bottom: 10px;
}

.header__question {
  font-size: 18px;
}
</style>