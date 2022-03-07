<script setup>
// import { RouterLink } from "vue-router"
</script>

<template>
  <section class="intro">
    <img class="intro__bg" src="@/assets/img/bg-intro.jpg" alt="" />
    <div class="container">
      <p class="intro__header-sub">Пройдите точный и быстрый</p>
      <h1 class="intro__header">Тест на определение IQ</h1>
      <router-link to="/test" class="button button--test"
        >Пройти тест</router-link
      >
      <p class="intro__description">
        И получите рекомендации
        по&nbsp;развитию&nbsp;своего&nbsp;интеллекта<span
          >и&nbsp;улучшению финансового благосостояния и&nbsp;личной жизни</span
        >
      </p>
      <a href="#" class="intro__more">
        <span>
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.45453 7.63636L4.45453 2.10454L6.99544 4.64545L7.63635 4L3.99999 0.363632L0.363625 4L1.00453 4.6409L3.54544 2.10454L3.54544 7.63636L4.45453 7.63636Z"
              fill="#0C0B10"
            />
          </svg>
        </span>
        Подробнее
      </a>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/components/homeView/Intro/Intro.scss";
</style>
