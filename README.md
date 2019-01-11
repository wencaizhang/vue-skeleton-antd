# vue-skeleton-antd
vue 构建的 ant design 风格骨架屏组件

## 组件引入

1. 安装

```bash
# npm 安装
npm i vue-skeleton-antd

# yarn
yarn add vue-skeleton-antd
```

2. 引入组件

```js
import Vue from 'vue';
import Skeleton from 'vue-skeleton-antd';

Vue.use(Skeleton)
```

## API

### Skeleton 骨架屏

|  属性 |  说明 | 类型  |  默认值 |
| ------------ | ------------ | ------------ | ------------ |
|  active |  是否展示动画效果 | boolean  | true  |
|  avatar |  是否显示头像占位图 |  boolean |  true |
|  paragraph |  是否显示段落占位图 |  boolean |  true |
|  title |  是否显示标题占位图 |  boolean |  true |
|  loading |  为 `true` 时，显示占位图。反之则直接展示子组件 |  boolean |  - |


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
