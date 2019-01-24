<template>
  <div style="padding-top: 16px;">
    <Skeleton :avatar="{shape: 'square'}"/>
  </div>
</template>

<script>
import Skeleton from "../../../src/components/Skeleton";

export default {
  components: { Skeleton },
};
</script>