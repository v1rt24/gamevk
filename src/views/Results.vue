<template>
  <main class="full result" :style="{backgroundImage: `url('/img/${resultRace}_bg.jpg')`}">
    <h1 class="result__title">{{ results[resultRace].name }}</h1>

    <div class="result__img">
      <img class="result__img-img" :src="`/img/${resultRace}_logo.png`" :alt="results[resultRace].name">
    </div>

    <div class="result__text">
      <p class="result__desc">{{ results[resultRace].description }}</p>

      <div class="result__quote-bx">
        <p class="result__quote">{{ results[resultRace].quote1 }}</p>
        <p class="result__quote">{{ results[resultRace].quote2 }}</p>
        <div class="result__author">{{ results[resultRace].author }}</div>
      </div>
    </div>

    <Button
        fa-icon-name="fa-reply"
        back
        :border-color="borderColorUtil(resultRace)"
        @click="flag = 'Achievements'"
    />
  </main>
</template>

<script setup lang="ts">
import {inject} from 'vue';
import {results} from '../assets/db.json';
import Button from '../components/Button.vue';
import {IProvide} from '../types/provide.types';
import {borderColorUtil} from '../utils/borderColorUtil';

//
const {flag, resultRace} = inject('app') as IProvide;
</script>

<style scoped>
.result {
  background-position: center;
}

/**/
.result__title {
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
  padding-top: 20px;
  margin-bottom: 20px;
}

/**/
.result__img {
  text-align: center;
  margin-bottom: 20px;
}

.result__img-img {
  width: 250px;
}

/**/
.result__text {
  line-height: 20px;
  margin-bottom: 20px;
}

.result__desc {
  margin-bottom: 20px;
}
</style>