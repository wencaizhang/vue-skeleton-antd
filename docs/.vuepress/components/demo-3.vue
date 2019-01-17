<template>
  <div style="padding-top: 16px;">
    <Skeleton active :title="{width: '90%'}"/>
  </div>
</template>

<script>
import Skeleton from "../../../src/components/Skeleton";

export default {
  components: { Skeleton },
};
</script>