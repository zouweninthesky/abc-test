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
      :id="p.value"
      :name="p.name"
      :value="p.value"
      type="radio"
      @change="$emit('can-continue')"
    />
    <label :for="p.value">{{ p.label }}</label>
  </li>
</template>

<style lang="scss">
@import "@/components/testView/Task/TaskItem/TaskItem.scss";
</style>
