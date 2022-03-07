<script setup>
const p = defineProps({
  currentStep: Number,
  numberOfSteps: Number,
});
</script>

<template>
  <div class="progress-bar">
    <div class="progress-bar__bar">
      <div
        class="progress-bar__progress"
        v-bind:style="{
          width: `${(100 / numberOfSteps) * (currentStep + 1)}%`,
        }"
      ></div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/components/testView/ProgressBar/ProgressBar.scss";
</style>
