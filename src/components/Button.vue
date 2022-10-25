<template>
  <button :class="['btn', {back: back}]">
    <i :class="['fa', faIconName]"></i>
    <span class="btn__text">{{ text }}</span>
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  faIconName?: string
  text?: string
  back?: boolean
  borderColor?: string
}>(), {
  borderColor: 'rgba(1, 88, 154, 0.5)',
});
</script>

<style scoped>
.btn {
  width: 240px;
  min-height: 50px;
  color: white;
  background-color: #1978d3;
  border: none;
  border-radius: 30px;
  box-shadow: 0 7px 0 0 #01579a;
  padding: 10px 20px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.btn.back {
  width: 70px;
  height: 70px;
  background-color: #00000080;
  box-shadow: none;
  border: 5px solid v-bind(borderColor);
  border-radius: 50%;
  margin: 0 auto;
}

.btn__text {
  text-transform: uppercase;
}
</style>