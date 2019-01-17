---
title: 示例
---
# 示例

## 最基本的占位效果

**预览**

<ClientOnly>
  <demo-1></demo-1>
</ClientOnly>

**代码**

```html
<Skeleton />
```

## 更复杂的组合

**预览**

<ClientOnly>
  <demo-2></demo-2>
</ClientOnly>

**代码**

```html
<Skeleton avatar :paragraph="{rows: 4, width: '80%'}"/>
```


## 动画效果

**预览**

<ClientOnly>
  <demo-3></demo-3>
</ClientOnly>

**代码**

```html
<Skeleton active :title="{width: '90%'}"/>
```

## 加载占位图包含子组件

**预览**

<ClientOnly>
  <demo-4></demo-4>
</ClientOnly>

**代码**

```html
<button @click="loading = !loading">Toggle Skeleton</button>
<Skeleton :loading="loading">
  <p><strong>静夜思</strong></p>
  <p>床前明月光，疑是地上霜。</p>
  <p>举头望明月，低头思故乡。</p>
</Skeleton>
```

```js
export default {
  data() {
    return {
      loading: false,
    }
  }
};
```