<script setup>
const p = defineProps({
  value: String,
  label: String,
  name: String,
});
</script>

<template>
  <li class="task-item">
    <input
      :id="value"
      :name="name"
      :value="value"
      type="radio"
      @change="$emit('can-continue')"
    />
    <label :for="value">{{ label }}</label>
  </li>
</template>

<style lang="scss">
@import "@/components/testView/Task/TaskItem/TaskItem.scss";
</style>
