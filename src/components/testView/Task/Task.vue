<script setup>
import TaskItem from "@/components/testView/Task/TaskItem/TaskItem.vue";
const p = defineProps({
  task: String,
  name: String,
  answers: Array,
  answerField: String,
});
</script>

//
<script>
// export default { methods: {
//   reset()
// } };
//
</script>

<template>
  <section class="task">
    <h2 class="visually-hidden"></h2>
    <p class="task__text">{{ p.task }}</p>
    <img src="" alt="" class="task__image" />
    <form action="">
      <ul class="task__answers">
        <TaskItem
          v-for="a in p.answers"
          v-bind="{
            value: a.value,
            label: a.label,
            name: p.name,
            answerField: p.answerField,
          }"
          @can-continue="$emit('can-continue')"
        />
      </ul>
      <input type="reset" value="Reset" />
    </form>
  </section>
</template>

<style lang="scss">
@import "@/components/testView/Task/Task.scss";
</style>
