<template>
  <Stepper />
  <div class="container">
    <router-link
      :class="['back-button', { hidden: app.currentStep !== 2 }]"
      to="/"
    >
      <img src="assets/icons/arrow_back.svg" alt="Arrow Back" />
      <span>Back to delivery</span>
    </router-link>
    <div class="wrapper">
      <router-view />
      <Sidebar />
    </div>
  </div>
</template>

<script setup>
import Stepper from "./components/Stepper/Stepper.vue";
import Sidebar from "./components/Shared/Sidebar/Sidebar.vue";
import { STEPS, CURRENT_STEP_KEY, ORDER_DATA_KEY } from "./constants";

import { useApp } from "./stores/app";
import { useRoute } from "vue-router";

import { watch } from "vue";
import { useCheckout } from "./stores/checkout";

const app = useApp();
const checkout = useCheckout();
const route = useRoute();

watch(
  () => route.name,
  (value) => {
    const index = STEPS.findIndex((s) => s === value);
    const step = index + 1;
    if (step === -1) return;

    localStorage.setItem(CURRENT_STEP_KEY, step);
    app.currentStep = step;
  }
);

checkout.$subscribe((mutations, state) => {
  localStorage.setItem(ORDER_DATA_KEY, JSON.stringify(state.orderData));
});
</script>

<style scoped lang="stylus" src="./App.styl"></style>
