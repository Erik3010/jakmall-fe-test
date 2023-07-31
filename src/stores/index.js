import { createPinia } from "pinia";
import router from "../router";
import { markRaw } from "vue";

const pinia = createPinia();
pinia.use(({store}) => {
  store.router = markRaw(router)
})

export default pinia;
