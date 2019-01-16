import Vue from "vue";
import moment from "moment";
const api = {};

export default {
  install(Vue: any, options: any) {
    Object.entries(api).forEach(item => {
      [, Vue.prototype[item[0]]] = item;
    });
    Vue.prototype.global = {
      defaultImg: 'this.src="' + require("@/assets/default.png") + '"',
    };
    if (!("$route" in Vue.prototype)) {
      Vue.prototype["$route"] = {
        path: "",
      };
    }
  },
};

Vue.filter("dateTime", (value: any, format = "YYYY-MM-DD HH:mm:SS") => {
  // 纯数字的 string 类型的 timestamp 会报错
  if (typeof value == "string" && /^\d+$/g.test(value)) {
    value = Number(value) * 1;
  }
  return moment(value).format(format);
});

Vue.filter("imgError", (value: any) => {
  return 'this.src="' + require("../assets/default.png") + '"';
});

// directive
Vue.directive("book", {
  bind: function(el: any, binding: any) {
    el.onclick = function() {
      if (!/\w+/i.test(binding.value)) {
        return alert("INVALID_BOOK");
      }
      location.href = "/book/sections.html?bid=" + binding.value;
    };
    el.style.cursor = "pointer";
  },
});
Vue.directive("section", {
  bind: function(el: any, binding: any) {
    el.onclick = function() {
      if (!/\w+/i.test(binding.value)) {
        return alert("INVALID_SECTION");
      }
      location.href = "/book/sections/contents.html?sid=" + binding.value;
    };
    el.style.cursor = "pointer";
  },
});
