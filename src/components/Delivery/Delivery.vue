<template>
  <section class="section">
    <header class="section__header">
      <Title>Delivery details</Title>
      <div class="checkbox">
        <label class="checkbox__wrapper">
          <input
            type="checkbox"
            name="is_dropshipper"
            id="is_dropshipper"
            v-model="checkout.orderData.isDropshipper"
          />
          <div class="checkbox__checkmark"></div>
          <span class="checkbox__label">Send as dropshipper</span>
        </label>
      </div>
    </header>
    <div class="section__content">
      <form action="">
        <div
          :class="[
            'form__control',
            getValidClass(checkout.orderData.form.email.isValid),
          ]"
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" "
            v-model="checkout.orderData.form.email.value"
          />
          <label for="email">Email</label>
        </div>
        <div
          :class="[
            'form__control',
            getValidClass(checkout.orderData.form.dropshipperName.isValid),
          ]"
        >
          <input
            type="text"
            name="dropshipper_name"
            id="dropshipper_name"
            placeholder=" "
            v-model="checkout.orderData.form.dropshipperName.value"
            :disabled="!checkout.orderData.isDropshipper"
          />
          <label for="dropshipper_name">Dropshipper name</label>
        </div>
        <div
          :class="[
            'form__control',
            getValidClass(checkout.orderData.form.phoneNumber.isValid),
          ]"
        >
          <input
            type="text"
            name="phone_number"
            id="phone_number"
            placeholder=" "
            v-model="checkout.orderData.form.phoneNumber.value"
          />
          <label for="phone_number">Phone Number</label>
        </div>
        <div
          :class="[
            'form__control',
            getValidClass(
              checkout.orderData.form.dropshipperPhoneNumber.isValid
            ),
          ]"
        >
          <input
            type="text"
            name="dropshipper_phone_number"
            id="dropshipper_phone_number"
            placeholder=" "
            v-model="checkout.orderData.form.dropshipperPhoneNumber.value"
            :disabled="!checkout.orderData.isDropshipper"
          />
          <label for="dropshipper_phone_number">
            Dropshipper phone Number
          </label>
        </div>
        <div
          :class="[
            'form__control',
            getValidClass(checkout.orderData.form.address.isValid),
          ]"
        >
          <textarea
            name="delivery_address"
            id="delivery_address"
            placeholder=" "
            v-model="checkout.orderData.form.address.value"
          ></textarea>
          <label for="delivery_address">Delivery Address</label>
          <div class="form__counter">
            {{ checkout.orderData.form.address.value?.length ?? 0 }}
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import Title from "../Shared/Title/Title.vue";
import { useCheckout } from "../../stores/checkout";
import { watch, computed } from "vue";

const checkout = useCheckout();

const getValidClass = (isValid) => {
  if (isValid === null) return "";
  return isValid ? "form__control--success" : "form__control--failed";
};

watch(
  () => checkout.orderData.form.email.value,
  () => checkout.checkEmail()
);

watch(
  () => checkout.orderData.form.dropshipperName.value,
  () => checkout.checkDropshipperName()
);

watch(
  () => checkout.orderData.form.phoneNumber.value,
  () => checkout.checkPhoneNumber()
);

watch(
  () => checkout.orderData.form.address.value,
  () => checkout.checkAddress()
);

watch(
  () => checkout.orderData.form.dropshipperPhoneNumber.value,
  () => checkout.checkDropshipperPhoneNumber()
);

watch(
  () => checkout.orderData.isDropshipper,
  () => {
    checkout.orderData.form.dropshipperName.value = "";
    checkout.orderData.form.dropshipperPhoneNumber.value = "";
  }
);
</script>

<style scoped lang="stylus" src="./Delivery.styl"></style>
