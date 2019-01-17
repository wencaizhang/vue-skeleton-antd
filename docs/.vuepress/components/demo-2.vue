<template>
  <div style="padding-top: 16px;">
    <Skeleton avatar :paragraph="{rows: 4, width: '80%'}"/>
  </div>
</template>

<script>
import Skeleton from "../../../src/components/Skeleton";

export default {
  components: { Skeleton },
};
</script>