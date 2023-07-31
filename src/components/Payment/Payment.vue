<template>
  <section class="section">
    <div class="section__item">
      <Title>Shipment</Title>
      <div class="section__content">
        <div class="card__wrapper">
          <div
            :class="[
              'card',
              { 'card--selected': checkout.orderData.shipment === index },
            ]"
            v-for="(shipment, index) in SHIPMENT_TYPE"
            :key="index"
            @click="checkout.orderData.shipment = index"
          >
            <span class="card__name">{{ shipment.name }}</span>
            <h4>{{ formatNumber(shipment.price) }}</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="section__item">
      <Title>Payment</Title>
      <div class="section__content">
        <div class="card__wrapper">
          <div
            :class="[
              'card',
              { 'card--selected': checkout.orderData.payment === index },
              { 'card--empty-balance': payment.balance === null },
            ]"
            v-for="(payment, index) in PAYMENT_TYPE"
            :key="index"
            @click="checkout.orderData.payment = index"
          >
            <span class="card__name">{{ payment.name }}</span>
            <h4 v-if="payment.balance !== null">
              {{ formatNumber(payment.balance) }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Title from "../Shared/Title/Title.vue";
import { SHIPMENT_TYPE, PAYMENT_TYPE } from "../../constants";
import { formatNumber } from "../../helpers";

import { useCheckout } from "../../stores/checkout";

const checkout = useCheckout();
</script>

<style scoped lang="stylus" src="./Payment.styl"></style>
