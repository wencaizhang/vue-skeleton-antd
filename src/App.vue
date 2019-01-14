<template>
  <div id="app">
    <h3>最基本的展位效果</h3>
    <Skeleton/>

    <h3>更复杂的组合</h3>
    <Skeleton avatar :paragraph="{rows: 4, width: '80%'}"/>

    <h3>动画效果</h3>
    <Skeleton active :title="{width: '90%'}"/>

    <h3>动画效果</h3>
    <Skeleton active :avatar="{shape: 'square'}"/>

    <h3>加载占位图包含子组件</h3>
    <button @click="showSkeleton">show skeleton</button>
    <Skeleton :loading="loading">Skeleton</Skeleton>
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
  methods: {
    showSkeleton() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
