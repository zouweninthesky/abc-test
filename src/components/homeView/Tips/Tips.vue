<script setup></script>

<template>
  <section class="tips">
    <h2 class="visually-hidden"></h2>
    <div class="container">
      <p class="tips__content">
        Также по результатам теста
        <strong>вы&nbsp;получите</strong> подробные <strong>советы</strong> по
        определению наиболее перспективной <strong>для вашего типа </strong>
        <span>интеллекта</span> <strong>сферы деятельности</strong>,
        которая&nbsp;принесет&nbsp;вам скорейший финансовый результат.
      </p>
      <img src="@/assets/img/tips.png" alt="" class="tips__img" />
      <router-link to="/test" class="button">Пройти тест</router-link>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/components/homeView/Tips/Tips.scss";
</style>
