import "./assets/css/style.styl";
import { createApp } from "vue";
import router from "./router";
import pinia from "./stores";
import App from "./App.vue";

createApp(App).use(router).use(pinia).mount("#app");
