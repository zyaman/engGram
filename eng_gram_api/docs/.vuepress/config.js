module.exports = {
    title: 'English\'s grammar',
    description: '英语语法',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/engGram/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
      nav:[ // 导航栏配置
        {text: '音标', link: 'https://www.yingyutu.com/dj' },
        {text: '视频详解', link: 'https://www.yingyutu.com/category/yufa'},
        {text: '英语兔', link: 'https://www.yingyutu.com/'}      
      ],
      sidebar: 'auto', // 侧边栏配置
      sidebarDepth: 2, // 侧边栏显示2级
    }
  };