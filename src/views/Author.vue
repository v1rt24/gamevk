<template>
  <main class="full author">
    <div class="wrapper-content">
      <a class="author__link" href="/" target="_blank">
        <Button
            fa-icon-name="fa-vk"
            text="Вконтакте"
        />
      </a>

      <a class="author__link" href="/" target="_blank">
        <Button
            fa-icon-name="fa-youtube"
            text="ЮТуб"
        />
      </a>

      <Button
          fa-icon-name="fa-reply"
          back
          @click="flag = 'Start'"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import {inject} from 'vue';
import Button from '../components/Button.vue';
import {IProvide} from '../types/provide.types';

//
const {flag} = inject('app') as IProvide;
</script>

<style scoped>
.author__link {
  display: block;
  margin-bottom: 30px;
}

.author a {
  text-decoration: none;
}
</style>