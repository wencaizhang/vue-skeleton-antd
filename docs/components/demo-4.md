---
title: 段落
---
# 段落

## 段落默认显示三行

**预览**

<ClientOnly>
  <demo-4-1></demo-4-1>
</ClientOnly>

**代码**

```html
<Skeleton />
```

## 指定段落行数

**预览**

<ClientOnly>
  <demo-4-2></demo-4-2>
</ClientOnly>

**代码**

```html
<Skeleton :paragraph="{rows: 4}"/>
```

## 指定段落宽度

默认段落每一行的宽度都是 100%，可以自定义最后一行的宽度。

**预览**

<ClientOnly>
  <demo-4-3></demo-4-3>
</ClientOnly>

**代码**

```html
<Skeleton :paragraph="{rows: 4, width: '80%'}"/>
```
