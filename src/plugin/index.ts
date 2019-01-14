import Vue from "vue";
import moment from "moment";
const api = {};

export default {
  install(Vue: any, options: any) {
    Object.entries(api).forEach(item => {
      [, Vue.prototype[item[0]]] = item;
    });
  },
};

Vue.filter("dateTime", (value: any, format = "YYYY-MM-DD HH:mm:SS") => {
  // 纯数字的 string 类型的 timestamp 会报错
  if (typeof value == "string" && /^\d+$/g.test(value)) {
    value = Number(value) * 1;
  }
  return moment(value).format(format);
});
