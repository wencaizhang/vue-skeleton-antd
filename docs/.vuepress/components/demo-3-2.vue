<template>
  <div style="padding-top: 16px;">
    <vue-skeleton :title="{width: '80%'}"/>
  </div>
</template>

<script>
import vueSkeleton from "../../../src/components/Skeleton";

export default {
  components: { vueSkeleton },
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
