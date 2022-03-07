<script setup>
import TaskItem from "@/components/testView/Task/TaskItem/TaskItem.vue";
import TaskItemColor from "@/components/testView/Task/TaskItemColor/TaskItemColor.vue";
import TaskItemSquare from "@/components/testView/Task/TaskItemSquare/TaskItemSquare.vue";
import FigureImg from "@/assets/img/tasks/task-figure.jpg";
import PyramideImg from "@/assets/img/tasks/task-pyramide.jpg";
import StarImg from "@/assets/img/tasks/task-star.jpg";
const p = defineProps({
  step: Object,
});
</script>

//
<script>
export default {
  data() {
    return {
      canContinue: false,
    };
  },
  methods: {
    setContinueTrue() {
      this.canContinue = true;
    },
    setContinueFalse() {
      this.canContinue = false;
    },
    onNext() {
      this.setContinueFalse();
      this.$emit("next-step");
      this.$refs.form.reset();
    },
    getImage(name) {
      switch (name) {
        case "figure":
          return FigureImg;
        case "pyramid":
          return PyramideImg;
        case "star":
          return StarImg;
      }
    },
  },
};
</script>

<template>
  <section class="task">
    <h2 class="visually-hidden"></h2>
    <form class="task__form" action="#" ref="form">
      <p class="task__text">{{ step.task }}</p>
      <ul v-if="step.subTask" class="task__spans">
        <li v-for="s in step.subTask" class="task__span">{{ s }}</li>
      </ul>
      <img
        v-if="step.img"
        :src="getImage(step.name)"
        :alt="step.alt"
        :style="{
          width: `${step.imgSizes.width}rem`,
          height: `${step.imgSizes.height}rem`,
        }"
        class="task__image"
      />
      <ul
        v-if="step.modifier !== 'pick-color' && step.modifier !== 'row'"
        class="task__answers"
      >
        <TaskItem
          v-for="a in step.answers"
          v-bind="{
            value: a.value,
            label: a.label,
            name: step.name,
          }"
          @can-continue="setContinueTrue"
        />
      </ul>
      <ul v-if="step.modifier === 'pick-color'" class="task__color-answers">
        <TaskItemColor
          v-for="a in step.answers"
          v-bind="{
            value: a.value,
            name: step.name,
          }"
          @can-continue="setContinueTrue"
        />
      </ul>
      <ul v-if="step.modifier === 'row'" class="task__square-answers">
        <TaskItemSquare
          v-for="a in step.answers"
          v-bind="{
            value: a.value,
            name: step.name,
          }"
          @can-continue="setContinueTrue"
        />
      </ul>
      <button
        type="button"
        class="button"
        @click="onNext"
        :disabled="!canContinue"
      >
        Далее
      </button>
    </form>
  </section>
</template>

<style lang="scss">
@import "@/components/testView/Task/Task.scss";
</style>
