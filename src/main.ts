import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { VueDapp } from "vue-dapp";

createApp(App)
  .use(store)
  .use(router)
  .use(VueDapp, {
    infuraId: "8192d739d56043a9a9e9364fa8efc2f0",
    appName: "bugged",
    appUrl: "https://kenchang8787.com",
  })
  .mount("#app");
