<script setup>
import TaskItem from "@/components/testView/Task/TaskItem/TaskItem.vue";
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
  },
};
</script>

<template>
  <section class="task">
    <h2 class="visually-hidden"></h2>
    <form class="task__form" action="#">
      <p class="task__text">{{ step.task }}</p>
      <ul v-if="step.subTask" class="task__spans">
        <li v-for="s in step.subTask" class="task__span">{{ s }}</li>
      </ul>
      <img
        v-if="step.img"
        :src="step.img"
        :alt="step.alt"
        class="task__image"
      />
      <ul v-if="step.modifier !== 'pick-color'" class="task__answers">
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
      <input
        class="button"
        type="reset"
        @click="$emit('next-step')"
        :disabled="!canContinue"
        value="Далее"
      />
    </form>
  </section>
</template>

<style lang="scss">
@import "@/components/testView/Task/Task.scss";
</style>
