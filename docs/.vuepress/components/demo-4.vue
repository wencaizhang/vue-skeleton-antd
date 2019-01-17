<template>
  <div style="padding-top: 16px;">
    <button @click="loading = !loading">Toggle Skeleton</button>
    <Skeleton :loading="loading">
      <p><strong>静夜思</strong></p>
      <p>床前明月光，疑是地上霜。</p>
      <p>举头望明月，低头思故乡。</p>
    </Skeleton>
  </div>
</template>

<script>
import Skeleton from "../../../src/components/Skeleton";

export default {
  components: { Skeleton },
  data() {
    return {
      loading: true,
    };
  },
};
</script>

<style scoped>
button {
  margin-bottom: 10px;
}
p {
  margin: 0;
}
</style>
