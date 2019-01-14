import Vue from "vue";
import Router from "vue-router";
import Layout from "@/components/layout/Layout.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/details.html",
      component: Layout,
      children: [
        {
          path: "",
          component: () => import("./index.vue"),
        },
      ],
    },
  ],
});
