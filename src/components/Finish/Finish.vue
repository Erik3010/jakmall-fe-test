<template>
  <section class="section section--finish">
    <div>
      <Title>Thank You</Title>
      <div class="section__content">
        <div class="section__item">
          <span>Order ID: {{ checkout.orderData.orderId }}</span>
          <p>
            Your order will be delivered
            {{ checkout.selectedShipment.duration }} with
            {{ checkout.selectedShipment.name }}
          </p>
        </div>
      </div>
      <router-link :class="['back-button']" to="/">
        <img src="assets/icons/arrow_back.svg" alt="Arrow Back" />
        <span>Go to homepage</span>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { useCheckout } from "../../stores/checkout";
import Title from "../Shared/Title/Title.vue";
import { onMounted } from "vue";

const checkout = useCheckout();

onMounted(() => {
  checkout.orderData.orderId === null && checkout.generateOrderId();
});
</script>

<style scoped lang="stylus" src="./Finish.styl"></style>
