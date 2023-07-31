import { defineStore } from "pinia";
import {
  isNotEmpty,
  isValidAddress,
  isValidEmail,
  isValidPhoneNumber,
} from "../helpers";
import { ORDER_DATA_KEY, PAYMENT_TYPE, SHIPMENT_TYPE } from "../constants";

export const useCheckout = defineStore("checkout", {
  state: () => {
    const orderData = JSON.parse(localStorage.getItem(ORDER_DATA_KEY)) ?? {
      orderId: null,
      isDropshipper: false,
      form: {
        email: {
          value: "",
          isValid: null,
        },
        phoneNumber: {
          value: "",
          isValid: null,
        },
        address: {
          value: "",
          isValid: null,
        },
        dropshipperName: {
          value: "",
          isValid: null,
        },
        dropshipperPhoneNumber: {
          value: "",
          isValid: null,
        },
      },
      shipment: "gosend",
      payment: "ewallet",
    };

    return { orderData };
  },
  getters: {
    selectedShipment() {
      return SHIPMENT_TYPE[this.orderData.shipment];
    },
    selectedPayment() {
      return PAYMENT_TYPE[this.orderData.payment];
    },
  },
  actions: {
    checkEmail() {
      this.orderData.form.email.isValid = isValidEmail(
        this.orderData.form.email.value
      );
    },
    checkPhoneNumber() {
      this.orderData.form.phoneNumber.isValid = isValidPhoneNumber(
        this.orderData.form.phoneNumber.value
      );
    },
    checkAddress() {
      this.orderData.form.address.isValid = isValidAddress(
        this.orderData.form.address.value
      );
    },
    checkDropshipperName() {
      console.log(this.orderData.form);
      this.orderData.form.dropshipperName.isValid = isNotEmpty(
        this.orderData.form.dropshipperName.value
      );
    },
    checkDropshipperPhoneNumber() {
      this.orderData.form.dropshipperPhoneNumber.isValid = isValidPhoneNumber(
        this.orderData.form.dropshipperPhoneNumber.value
      );
    },
    isValidForm() {
      this.checkEmail();
      this.checkPhoneNumber();
      this.checkAddress();
      if (this.orderData.isDropshipper) {
        this.checkDropshipperName();
        this.checkDropshipperPhoneNumber();
      }

      for (const key in this.orderData.form) {
        if (this.orderData.form[key].isValid === false) return false;
      }

      return true;
    },
    generateOrderId() {
      // Excludes '1', 'I', '0', 'O'
      const characters = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
      const length = 5;
      let result = "";

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }

      this.orderData.orderId = result;
    },
  },
});
