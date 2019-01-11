<template>
  <div id="app">
    <Skeleton :loading="loading" />
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      loading: true,
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
