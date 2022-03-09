<script setup>
const p = defineProps({
  test: Boolean,
  finished: Boolean,
});
</script>

<script>
export default {
  data() {
    return {
      isNavOpened: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isNavOpened = !this.isNavOpened;
      this.toggleScrollDisable();
    },
    toggleScrollDisable() {
      if (!this.isNavOpened) {
        const scrollY = document.body.style.top;
        document.body.style.position = "";
        document.body.style.top = "";
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      } else {
        const top = window.scrollY;
        document.body.style.position = "fixed";
        document.body.style.top = `-${top}px`;
      }
    },
  },
};
</script>

<template>
  <header class="app-header" :class="{ 'app-header--opened': isNavOpened }">
    <button type="button" class="app-header__toggle-button" @click="toggleMenu">
      <span class="visually-hidden">Открыть/закрыть меню</span>
    </button>
    <div v-if="test" class="app-header__header-section">
      <img src="@/assets/img/logo.png" alt="" class="app-header__img" />
      <h2 v-if="!finished" class="app-header__header">
        тест на определение IQ
      </h2>
      <h2 v-else class="app-header__header app-header__header--big">Готово!</h2>
    </div>

    <nav class="app-header__nav">
      <ul class="app-header__nav-list">
        <li class="app-header__nav-item">
          <a href="">Главная</a>
        </li>
        <li class="app-header__nav-item">
          <a href="">Информация о тесте</a>
        </li>
        <li class="app-header__nav-item">
          <a href="">Пройти тест</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
@import "@/components/AppHeader/AppHeader.scss";
</style>
