<script setup>
const p = defineProps({
  value: String,
  name: String,
});
</script>

<template>
  <li class="task-item-square">
    <input
      :id="value"
      :name="name"
      :value="value"
      type="radio"
      @change="$emit('can-continue')"
    />
    <label :for="value">{{ value }}</label>
  </li>
</template>

<style lang="scss">
@import "@/components/testView/Task/TaskItemSquare/TaskItemSquare.scss";
</style>
