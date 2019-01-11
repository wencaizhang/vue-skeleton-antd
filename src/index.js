import Skeleton from "./components/Skeleton.vue";

// 定义我们的插件
export default {
  install(Vue, options) {
    Vue.component("Skeleton", Skeleton);
  }
};
