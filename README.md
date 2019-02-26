[![npm version](https://badge.fury.io/js/vue-skeleton-antd.svg)](https://badge.fury.io/js/vue-skeleton-antd)
[![](https://img.shields.io/npm/dt/vue-skeleton-antd.svg)](https://badge.fury.io/js/vue-skeleton-antd)
![](https://img.shields.io/badge/license-MIT-000000.svg)


# vue-skeleton-antd

vue 构建的 ant design 风格骨架屏组件

## 骨架屏

简单来讲，骨架屏就是优化版的 loading 示意图。

![骨架屏示意图，图片来源：网络](./docs/.vuepress/public/skeleton-loading-null.webp)

如图所示，上面三者分别是骨架屏、菊花图、空白页。

可以看到骨架屏能够将页面的大致结构描绘出来，其体验要比菊花图好上太多。

骨架屏已经在易通行、支付宝、饿了么、知乎、淘宝等众多 APP 或网站中广泛使用，你还在等什么，快快用起来吧！

## 详细示例和文档

+ [GitHub](https://wencaizhang.github.io/vue-skeleton-antd/)
+ [码云镜像](https://wencaizhang.gitee.io/vue-skeleton-antd/)

## 组件引入

1. 安装

使用 npm 安装
```bash
npm i vue-skeleton-antd
```

或使用 yarn 安装

```bash
yarn add vue-skeleton-antd
```

2. 引入组件

```js
import Vue from 'vue';
import Skeleton from 'vue-skeleton-antd';

Vue.use(Skeleton)
```

## API


### 1. Skeleton 骨架屏

|  属性 |  说明 | 类型  |  默认值 |
| ------------ | ------------ | ------------ | ------------ |
|  `active` |  是否展示动画效果 | boolean  | false  |
|  `avatar` |  是否显示头像占位图 |  boolean 或 object |  false |
|  `paragraph` |  是否显示段落占位图 |  boolean 或 object |  true |
|  `title` |  是否显示标题占位图 |  boolean 或 object |  true |
|  `loading` |  为 `true` 时，显示占位图。<br>反之则直接展示子组件 |  boolean |  true |

### 2. AvatarProps 头像参数

头像参数 `avatar` 除了可以设置布尔值之外，还可以是 Object。如果是 Object，则允许拥有以下属性。

|  属性 |  说明 | 类型  |  默认值 |
| ------------ | ------------ | ------------ | ------------ |
|  `shape` |  指定头像的形状 | Enum{ 'circle', 'square' }  | circle  |

### 3. TitleProps 标题参数

标题参数 `avatar` 除了可以设置布尔值之外，还可以是 Object。如果是 Object，则允许拥有以下属性。

|  属性 |  说明 | 类型  |  默认值 |
| ------------ | ------------ | ------------ | ------------ |
|  `width` |  设置标题占位图的宽度 | string  |  50%  |

### 4. ParagraphProps 段落参数

段落参数 `avatar` 除了可以设置布尔值之外，还可以是 Object。如果是 Object，则允许拥有以下属性。

|  属性 |  说明 | 类型  |  默认值 |
| ------------ | ------------ | ------------ | ------------ |
|  `rows` |  设置段落占位图的行数 | number  | 3  |
|  `width` |  设置段落最后一行的宽度 | `number | string`  | -  |

## LICENSE

MIT License