<template>
  <aside class="sidebar">
    <div class="sidebar__group">
      <div class="sidebar__header">
        <h2>Summary</h2>
        <p>10 items purchased</p>
      </div>
      <div class="sidebar__body">
        <div class="sidebar__summary-item" v-if="app.currentStep !== 1">
          <label>Delivery estimation</label>
          <h4>
            {{ checkout.selectedShipment.duration }} by
            {{ checkout.selectedShipment.name }}
          </h4>
        </div>
        <div class="sidebar__summary-item" v-if="app.currentStep === 3">
          <label>Payment method</label>
          <h4>{{ checkout.selectedPayment.name }}</h4>
        </div>
      </div>
    </div>
    <div class="sidebar__footer">
      <div class="sidebar__item">
        <label>Cost of goods</label>
        <span>{{ formatNumber(COSTS) }}</span>
      </div>
      <div class="sidebar__item" v-if="checkout.orderData.isDropshipper">
        <label>Dropshipping Fee</label>
        <span>{{ formatNumber(DROPSHIPPING_FEE) }}</span>
      </div>
      <div class="sidebar__item" v-if="app.currentStep !== 1">
        <label>
          <span class="bold">{{ checkout.selectedShipment.name }}</span>
          Shipment
        </label>
        <span>{{ formatNumber(checkout.selectedShipment.price) }}</span>
      </div>
      <div class="sidebar__item sidebar__item--large">
        <label>Total</label>
        <span>{{ formatNumber(total) }}</span>
      </div>
      <Button v-if="app.currentStep < STEPS.length" @click="app.nextStep">
        <span v-if="app.currentStep === 1">Continue to Payment</span>
        <span v-else>Pay with {{ checkout.selectedPayment.name }}</span>
      </Button>
    </div>
  </aside>
</template>

<script setup>
import Button from "../Button/Button.vue";
import { STEPS, COSTS, DROPSHIPPING_FEE } from "../../../constants";
import { formatNumber } from "../../../helpers";

import { useApp } from "../../../stores/app";
import { useCheckout } from "../../../stores/checkout";
import { computed } from "vue";

const app = useApp();
const checkout = useCheckout();

const total = computed(() => {
  const dropshippingFee = checkout.orderData.isDropshipper
    ? DROPSHIPPING_FEE
    : 0;
  const shipment = app.currentStep !== 1 ? checkout.selectedShipment.price : 0;

  return COSTS + dropshippingFee + shipment;
});
</script>

<style scoped lang="scss" src="./Sidebar.styl"></style>
