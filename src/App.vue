<template>
  <div class="wrapperBody">
    <ComponentLoad/>
  </div>
</template>

<script setup lang="ts">
import {computed, defineAsyncComponent, provide} from 'vue';
import {useApp} from './use/app';

//
const {flag, resultRace, score, totalGame, totalGames, goToResult} = useApp();

//
const ComponentLoad = computed(() => {
  const target = flag.value;
  return defineAsyncComponent(() => import(`./views/${target}.vue`));
});

//
provide('app', {
  flag,
  resultRace,
  score,
  totalGame,
  totalGames,
  goToResult,
});
</script>

<style scoped>

</style>