<script setup>
const p = defineProps({
  value: String,
  name: String,
});
</script>

<template>
  <li class="task-item-color">
    <input
      :id="value"
      :name="name"
      :value="value"
      type="radio"
      @change="$emit('can-continue')"
    />
    <label :style="{ backgroundColor: value }" :for="value"></label>
  </li>
</template>

<style lang="scss">
@import "@/components/testView/Task/TaskItemColor/TaskItemColor.scss";
</style>
