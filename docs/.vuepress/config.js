const path = require('path')
module.exports = {
  base: '/vue-skeleton-antd/',
  title: 'vue-skeleton-antd',
  description: 'vue-skeleton-antd - 一个好用的骨架屏组件',
  head: [
    ['link', { rel: 'icon', href: 'https://vuepress.vuejs.org/logo.png' }],
  ],
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: 'GitHub', link: 'https://github.com/wencaizhang/vue-skeleton-antd/'},
      {text: '交流', link: 'https://github.com/wencaizhang/vue-skeleton-antd/issues'},
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/get-started/',
        ]
      },
      {
        title: '使用',
        collapsable: false,
        children: [
          '/components/demo',
          '/components/api',
        ]
      },

    ]
  },
  scss:{
    includePaths: [path.join(__dirname, '../../styles')]
  }
}
