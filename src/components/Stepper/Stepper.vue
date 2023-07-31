<template>
  <div class="stepper">
    <div class="stepper__wrapper">
      <div
        v-for="(step, index) in STEPS"
        :key="step"
        :class="[
          'stepper__item',
          { 'stepper__item--active': index + 1 <= app.currentStep },
        ]"
      >
        <div class="stepper__number">
          {{ index + 1 }}
        </div>
        <div class="stepper__label">{{ step }}</div>
        <div class="stepper__arrow" v-if="index < STEPS.length - 1">
          <img src="assets/icons/keyboard_arrow_right.svg" alt="arrow right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { STEPS } from "../../constants";

import { useApp } from "../../stores/app";

const app = useApp();
</script>
<style scoped lang="stylus" src="./Stepper.styl"></style>
