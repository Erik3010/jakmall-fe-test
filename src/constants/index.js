export const STEPS = ["Delivery", "Payment", "Finish"];
export const CURRENT_STEP_KEY = "jakmall_test:current_step";
export const ORDER_DATA_KEY = "jakmall_test:order_data";

export const COSTS = 500000;
export const DROPSHIPPING_FEE = 5900;

export const SHIPMENT_TYPE = {
  gosend: {
    name: "GO-SEND",
    price: 15000,
    duration: "today",
  },
  jne: {
    name: "JNE",
    price: 9000,
    duration: "2 days",
  },
  pc: {
    name: "Personal Courier",
    price: 29000,
    duration: "1 day",
  },
};

export const PAYMENT_TYPE = {
  ewallet: {
    name: "e-Wallet",
    balance: 1500000,
  },
  bank: {
    name: "Bank Transfer",
    balance: null,
  },
  va: {
    name: "Virtual Account",
    balance: null,
  },
};
