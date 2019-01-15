import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "normalize.css/normalize.css";
import "./styles/common.scss";
import "font-awesome/css/font-awesome.min.css";
import plugin from "./plugin";
import checkLogin from "./utils/checkLogin";

Vue.config.productionTip = false;

checkLogin(router);
Vue.use(plugin);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
