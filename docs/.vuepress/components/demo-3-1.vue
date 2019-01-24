<template>
  <div style="padding-top: 16px;">
    <Skeleton />
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
