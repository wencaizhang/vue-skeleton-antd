<template>
  <div style="padding-top: 16px;">
    <vue-skeleton :paragraph="{rows: 4, width: '80%'}"/>
  </div>
</template>

<script>
import vueSkeleton from "../../../src/components/Skeleton";

export default {
  components: { vueSkeleton },
};
</script>

