<script setup>
import Flexbox from './base/Flexbox.vue';
import Card from './base/Card.vue';
import HelloWorld from './components/HelloWorld.vue'
import ListBadges from './base/ListBadges.vue';
import FormsInput from './base/FormsInput.vue';
import FormValidation from './base/FormValidation.vue';
import AlertsProgress from './base/AlertsProgress.vue';
import Tables from './base/Tables.vue';
import BreadcrumbsPagination from './base/BreadcrumbsPagination.vue';
import OtherCss from './base/OtherCss.vue';
import Dropdowns from './base/dynamic/Dropdowns.vue';
import Navbar from './base/Navbar.vue';
import AccordionsCollapse from './base/dynamic/AccordionsCollapse.vue';
import Carousel from './base/dynamic/Carousel.vue';
import ToastNotifications from './base/dynamic/ToastNotifications.vue';
import Spinners from './base/dynamic/Spinners.vue';
import Modals from './base/dynamic/Modals.vue';
</script>

<template>
  <!-- <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <router-view />
  </div>
  <HelloWorld msg="Vite + Vue + José" /> -->
  <Modals>Bootstrap Sandbox | Modal</Modals>
  

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
