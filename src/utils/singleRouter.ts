import Vue from "vue";
import Router from "vue-router";
import Layout from "@/components/layout/Layout.vue";
Vue.use(Router);

export default (route: string, childComponent: any) =>
  new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
      {
        path: `/${route}.html`,
        component: Layout,
        children: [
          {
            path: "",
            component: childComponent,
          },
        ],
      },
    ],
  });
