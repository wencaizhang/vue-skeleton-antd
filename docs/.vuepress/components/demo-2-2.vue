<template>
  <div style="padding-top: 16px;">
    <vue-skeleton :avatar="{shape: 'square'}"/>
  </div>
</template>

<script>
import vueSkeleton from "../../../src/components/Skeleton";

export default {
  components: { vueSkeleton },
};
</script>