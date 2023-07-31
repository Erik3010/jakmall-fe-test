import { defineStore } from "pinia";
import { CURRENT_STEP_KEY } from "../constants";
import { STEPS } from "../constants";
import { useCheckout } from "./checkout";

export const useApp = defineStore("app", {
  state: () => ({
    currentStep: localStorage.getItem(CURRENT_STEP_KEY) ?? 1,
  }),
  actions: {
    nextStep() {
      const checkout = useCheckout();
      if (this.currentStep >= STEPS.length || !checkout.isValidForm()) return;

      this.currentStep++;
      this.moveStep();
    },
    prevStep() {
      if (this.currentStep <= 1) return;
      this.currentStep--;
      this.moveStep();
    },
    moveStep() {
      this.router.push(`/step-${this.currentStep}`);
    },
  },
});
