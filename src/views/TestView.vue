<script setup>
import Task from "@/components/testView/Task/Task.vue";
import ProgressBar from "@/components/testView/ProgressBar/ProgressBar.vue";
import Loader from "@/components/testView/Result/Loader/Loader.vue";
import Result from "@/components/testView/Result/Result.vue";
</script>

<script>
import quiz from "@/data/quiz.js";

export default {
  data() {
    return {
      currentStep: 0,
      quiz: quiz,
      resultVisible: false,
      time: 600,
    };
  },
  methods: {
    timerTick() {
      if (this.time > 0) this.time--;
    },
    nextStep() {
      this.currentStep++;
      if (this.currentStep === this.quiz.length) {
        setTimeout(() => {
          // this.showResult();
          setInterval(this.timerTick, 1000);
        }, 2000);
      }
    },
    showResult() {
      this.resultVisible = true;
    },
  },
};
</script>

<template>
  <main class="test-view" :class="{ 'test-view--result': resultVisible }">
    <div v-if="currentStep !== quiz.length" class="test-view__wrapper">
      <img class="test-view__bg" src="@/assets/img/bg-main.jpg" alt="" />
      <ProgressBar
        v-bind="{ currentStep: currentStep, numberOfSteps: quiz.length }"
      />
      <Task
        v-bind="{
          step: quiz[currentStep],
        }"
        @next-step="nextStep"
      />
    </div>
    <div v-else-if="!resultVisible" class="test-view__wrapper">
      <img class="test-view__bg" src="@/assets/img/bg-main.jpg" alt="" />
      <ProgressBar v-bind="{ currentStep: 0, numberOfSteps: 1 }" />
      <h2 class="test-view__pre-result-header">Обработка результатов</h2>
      <Loader />
      <p class="test-view__pre-result-description">
        Определение стиля мышления...........
        ........................................................
      </p>
    </div>
    <div v-else class="test-view__wrapper">
      <img class="test-view__bg" src="@/assets/img/bg-main.jpg" alt="" />
      <Result :time="time" />
    </div>
  </main>
</template>

<style lang="scss">
@import "@/assets/scss/test-view.scss";
</style>
