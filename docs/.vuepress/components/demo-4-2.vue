<template>
  <div style="padding-top: 16px;">
    <Skeleton :paragraph="{rows: 4}"/>
  </div>
</template>

<script>
import Skeleton from "../../../src/components/Skeleton";

export default {
  components: { Skeleton },
};
</script>

