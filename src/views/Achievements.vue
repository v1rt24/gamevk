<template>
  <main class="full achievements">
    <h1 class="achievements__title">
      <i class="fa fa-trophy"></i>
      <span>Достижения</span>
    </h1>

    <div class="achievements__results">
      <div class="achievements__results-bx">
        <div class="achievements__results-title">Счёт</div>
        <div class="achievements__results-count">{{ totalScore }}</div>
      </div>

      <div class="achievements__results-bx">
        <div class="achievements__results-title">Открыто рас</div>
        <div class="achievements__results-count">{{ openRace }}</div>
      </div>

      <div class="achievements__results-bx">
        <div class="achievements__results-title">Всего игр</div>
        <div class="achievements__results-count">{{ totalGames }}</div>
      </div>

      <div class="achievements__results-bx">
        <div class="achievements__results-title">Любимая раса</div>
        <div class="achievements__results-count">{{ favoriteRace }}</div>
      </div>
    </div>

    <div class="achievements__middle-bx">
      <div
          v-for="(race, key) in results"
          :key="key"
          v-show="totalGame[key]"
          class="achievements__middle"
          @click="goToResult(key)"
      >
        <div class="achievements__middle-score">
          <i class="fa fa-star"></i>
          <div class="achievements__middle-count">{{ race.points }}</div>
        </div>

        <div class="achievements__middle-name">{{ race.name }}</div>
        <div class="achievements__middle-amount">{{ totalGame[key] }}</div>
      </div>
    </div>

    <Button
        fa-icon-name="fa-reply"
        back
        @click="flag = 'Start'"
    />
  </main>
</template>

<script setup lang="ts">
import {computed, inject} from 'vue';
import {results} from '../assets/db.json';
import Button from '../components/Button.vue';
import {IProvide} from '../types/provide.types';

//
const {flag, totalGame, totalGames, goToResult} = inject('app') as IProvide;

//
const totalScore = computed(() => Object.entries(totalGame.value).reduce((acc, [key, val]) => acc + +(results[key].points) * val, 0));

const openRace = computed(() => Object.keys(totalGame.value).reduce((acc, key) => acc + (totalGame.value[key] ? 1 : 0), 0));

const favoriteRace = computed(() => {
  let race = 'zerg';

  for (const key in totalGame.value) {
    if (totalGame.value[key] > totalGame.value[race]) {
      race = key;
    }
  }

  return results[race].name;
});
</script>

<style scoped>
.achievements__title {
  font-size: 25px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  margin-bottom: 20px;
}

/**/
.achievements__results {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: max-content max-content;
  text-align: center;
  font-size: 22px;
  background-color: rgba(0, 0, 0, .5);
  border: 5px solid rgba(1, 88, 154, .5);
  margin-bottom: 15px;
}

.achievements__results-bx {
  padding: 20px 10px;
}

.achievements__results-title {
  margin-bottom: 20px;
}

.achievements__results-count {
  font-size: 18px;
}

/**/
.achievements__middle-bx {
  display: grid;
  gap: 7px 0;
  margin-bottom: 15px;
}

.achievements__middle {
  background-color: rgba(25, 121, 211, .8);
  border: 5px solid rgba(1, 88, 154, .5);
  padding: 5px 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.achievements__middle-score {
  text-align: center;
}

.achievements__middle-score .fa {
  font-size: 15px;
  margin-right: 0;
  margin-bottom: 3px;
}

.achievements__middle-count {
  font-size: 18px;
}

.achievements__middle-name {
  font-size: 18px;
  margin-left: auto;
  margin-right: 20px;
}

.achievements__middle-amount {
}
</style>