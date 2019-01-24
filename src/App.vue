<template>
  <div id="app">
    <div class="links">
      <p>关于示例和API请查看文档：</p>
      <a target="_blank" href="https://wencaizhang.github.io/vue-skeleton-antd/">1. Host by GitHub</a>
      <br>
      <a target="_blank" href="https://wencaizhang.gitee.io/vue-skeleton-antd/">2. 码云</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      loading: false
    };
  },
  methods: {}
};
</script>

<style scoped>
#app {
  display: flex;
  justify-content: center;
}
.links {
  display: inline-block;
  margin-top: 100px;
}
a {
  color: #1890ff;
  text-align: center;
}
</style>

