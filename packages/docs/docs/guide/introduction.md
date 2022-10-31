# 简介

## 感谢
在当前表单设计器竞品多如牛毛的情况下，您选择我们的Form-Creator，是对您眼光的肯定，也是对我们的支持。

## 多样性
Form-Creator由当前前端多种主流框架孕育而出，有vue2，vue3，react等，还结合与之配套的ui设计库element-ui，element-plus，ant-design，后续我们会迭代引入自己开发的ui设计库vtmp

## 组件介绍
> 基础组件

当前设计了12个基础组件，俗话说基础决定上层建筑，透过现象看本质（输入框，开关，复选框，按钮，下拉框，单选框，文本域，分割线，手机号，静态文本，时间选择器，日期选择器）
> 高级组件

还设计了4个高级组件，一听名字就知道是上层建筑（复按钮组，单按钮组，上传），第四个富文本因为时间有限，人员有限，资金有限的原因，暂停开发，嗯，以后会有的；


> 容器

四个容器（栅格，标签页，表格，卡片）有容乃大，包罗万象，哪里不会拖哪里，妈妈再也不担心你不会布局了

## 全家桶
> @form-creator1/cli(当前版本已有)

form-creator配套脚手架构建工具

> @form-creator1/element-plus(当前版本已有)

基于element-plus+vue3封装的form-creator配套的组件库

> @form-creator1/element-ui(当前版本已有)

基于element-ui+vue2封装的form-creator配套的组件库

> @form-creator1/ant-design(计划中)

基于ant-design+react的form-creator配套的组件库，计划当中，不出意外在我有生之年应该可以完成

> @form-creator1/vtmp(计划中)

form-creator配套自研组件库，这个我是真不知道了，毕竟我只是个普通贡献者


<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: '../1.jpeg',
    name: 'Zhang Xin',
    title: '创造者',
    links: [
      { icon: 'github', link: '' },
      { icon: 'twitter', link: '' }
    ]
  },
   {
    avatar: '../4.jpeg',
    name: 'Lin Zi Yang',
    title: '主要贡献者',
    links: [
      { icon: 'github', link: '' },
      { icon: 'twitter', link: '' }
    ]
  },
    {
    avatar: '../2.jpeg',
    name: 'Zhang Rui',
    title: '主要贡献者',
    links: [
      { icon: 'github', link: '' },
      { icon: 'twitter', link: '' }
    ]
  },
    {
    avatar: '../3.png',
    name: 'Hu Ze Zhou',
    title: '主要贡献者',
    links: [
      { icon: 'github', link: '' },
      { icon: 'twitter', link: '' }
    ]
  },
    {
    avatar: '../5.png',
    name: 'Yao Guo Zhen',
    title: '主要贡献者',
    links: [
      { icon: 'github', link: '' },
      { icon: 'twitter', link: '' }
    ]
  }
]
</script>

## 团队
在这个急功近利的社会中，像这样为大家摸鱼考虑的团队已经不多了
<VPTeamMembers size="small" :members="members" />
