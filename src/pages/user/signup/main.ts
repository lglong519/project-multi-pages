import Vue from "vue";
import App from "@/App.vue";
import "@/registerServiceWorker";
import "normalize.css/normalize.css";
import "@/styles/common.scss";
import "font-awesome/css/font-awesome.min.css";
import singleRouter from "@/utils/singleRouter";

Vue.config.productionTip = false;

new Vue({
  router: singleRouter("user/signup", () => import("./index.vue")),
  render: h => h(App, { props: { title: "注册" } }),
}).$mount("#app");
