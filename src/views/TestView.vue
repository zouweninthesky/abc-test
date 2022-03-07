<script setup>
import Task from "@/components/testView/Task/Task.vue";
import ProgressBar from "@/components/testView/ProgressBar/ProgressBar.vue";
</script>

<script>
import quiz from "@/data/quiz.js";

export default {
  data() {
    return {
      currentStep: 0,
      quiz: quiz,
    };
  },
  methods: {
    nextStep() {
      this.currentStep++;
      this.canContinue = false;
    },
  },
};
</script>

<template>
  <main class="">
    <ProgressBar
      v-bind="{ currentStep: currentStep, numberOfSteps: quiz.length }"
    />
    <Task
      v-bind="{
        step: quiz[currentStep],
      }"
      @next-step="nextStep"
    />
  </main>
</template>

<style></style>
