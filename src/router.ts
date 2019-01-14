import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Layout from "./components/layout/Layout.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/index.html",
      redirect: "/index",
    },
    {
      path: "/",
      redirect: "/index",
    },
    {
      path: "/index",
      name: "home",
      component: Layout,
      children: [
        {
          path: "",
          component: () => import("./pages/index/index.vue"),
        },
      ],
    },
  ],
});
