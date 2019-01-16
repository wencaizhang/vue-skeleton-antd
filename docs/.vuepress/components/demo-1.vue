<template>
  <div style="padding-top: 16px;">
    <h2>最基本的展位效果</h2>
    <p>
      <strong>预览</strong>
    </p>
    <Skeleton/>
    <p>
      <strong>代码</strong>
    </p>
    <h3>更复杂的组合</h3>
    <Skeleton avatar :paragraph="{rows: 4, width: '80%'}"/>

    <h3>动画效果</h3>
    <Skeleton active :title="{width: '90%'}"/>

    <h3>动画效果</h3>
    <Skeleton active :avatar="{shape: 'square'}"/>

    <h3>加载占位图包含子组件</h3>
    <button @click="loading = !loading">show skeleton</button>
    <Skeleton :loading="loading">Skeleton</Skeleton>

    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import Skeleton from "../../../src/components/Skeleton";

export default {
  components: { Skeleton },
  data() {
    return {
      loading: false,
      content: `
          <Skeleton/>
      `
        .replace(/^ {8}/gm, "")
        .trim()
    };
  },
};
</script>