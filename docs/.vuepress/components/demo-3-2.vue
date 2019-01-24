<template>
  <div style="padding-top: 16px;">
    <Skeleton :title="{width: '80%'}"/>
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
