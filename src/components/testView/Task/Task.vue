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
      <p class="task__text">{{ p.step.task }}</p>
      <img src="" alt="" class="task__image" />
      <ul class="task__answers">
        <TaskItem
          v-for="a in p.step.answers"
          v-bind="{
            value: a.value,
            label: a.label,
            name: p.step.name,
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
