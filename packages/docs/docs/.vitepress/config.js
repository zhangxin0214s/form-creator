const base = process.env.BASE || '/'
module.exports = {
  base: base,
  title: "文档", // 标题
  description: "Life is short, Keep it simple.", // 描述信息
  head: [
    // 网站头部的配置
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
  ],
  themeConfig: {
    logo: "/logo.svg",
    socialLinks: [{ icon: "github", link: "https://git.100tal.com/wangxiao_neirongchanpinbu_edit/form-creator" }],
    nav: [
      { text: '指南', link: '/guide/introduction' },
      { text: '示例', link: '/example/form' },
    ],
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '简介', link: '/guide/introduction' },
          { text: '组件配置', link: '/guide/componentConfig' },
        ],
      },
      {
        text: '示例',
        items: [
          { text: '示例表单', link: '/example/form' },
          { text: '示例题目编辑页', link: '/example/subject' },
        ]
      }
    ],
  }
}
