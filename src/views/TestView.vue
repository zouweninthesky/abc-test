<script setup>
import Task from "@/components/testView/Task/Task.vue";
</script>

<script>
import quiz from "@/data/quiz.js";

export default {
  data() {
    console.log(1);
    console.log(quiz);
    return {
      canContinue: false,
      currentStep: 0,
      quiz: quiz,
      userAnswers: Array(quiz.length).fill(""),
    };
  },
  methods: {
    setContinueTrue() {
      this.canContinue = true;
    },
    setContinueFalse() {
      this.canContinue = false;
    },
    nextStep() {
      this.currentStep++;
      this.canContinue = false;
    },
  },
};
</script>

<template>
  <main class="">
    <Task
      v-bind="{
        task: quiz[currentStep].task,
        name: quiz[currentStep].name,
        answers: quiz[currentStep].answers,
        answerField: userAnswers[currentStep],
      }"
      @can-continue="setContinueTrue"
    />
    <button class="button" :disabled="!canContinue" @click="nextStep">
      Далее
    </button>
  </main>
</template>

<style></style>
