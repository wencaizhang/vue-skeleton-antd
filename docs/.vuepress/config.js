const path = require('path')
module.exports = {
  base: '/vue-skeleton-antd/',
  title: '骨架屏组件',
  description: '一个好用的UI框架',
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
          '/install/',
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
