<script setup>
const p = defineProps({
  data: Object,
});
console.log(p);
</script>

<script>
export default {};
</script>

<template>
  <div class="fetch-result">
    <ul class="fetch-result__list">
      <li class="fetch-result__item">Имя: {{ data ? data.name : "" }}</li>
      <li class="fetch-result__item">
        Год рождения: {{ data ? data.birth_year : "" }}
      </li>
      <li class="fetch-result__item">Рост: {{ data ? data.height : "" }}см</li>
      <li class="fetch-result__item">Вес: {{ data ? data.mass : "" }}кг</li>
      <li class="fetch-result__item">
        Цвет волос: {{ data ? data.hair_color : "" }}
      </li>
      <li class="fetch-result__item">
        Цвет глаз: {{ data ? data.eye_color : "" }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import "@/components/testView/Result/FetchResult/FetchResult.scss";
</style>
