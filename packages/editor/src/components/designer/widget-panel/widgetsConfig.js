export const containers = [
  {
    id:1,
    name: "栅格",
    type: "grid",
    icon: "grid",
    options: {
      basic: {},
      senior: {}
    },
  },
  {
    id:2,
    name: "标签页",
    type: "tabs",
    icon: "grid",
    options: {
      hidden: false,
    },
  },
]

export const basicWidgets = [
  {
    id:3,
    name: "输入框",
    type: "input",
    icon: "grid",
    options: {
      basic: {
        name: "", // 唯一名称
        label: "", // 标签
        type: "text",// 类型
        defaultValue: "",// 默认提示文本
      },
      senior: {}
    },
  },
  {
    id:4,
    name: "开关",
    type: "Switch",
    icon: "grid",
    options: {
      hidden: false,
    },
  },
  {
    id:5,
    name: "复选框",
    type: "checkbox",
    icon: "grid",
    options: {
      hidden: false,
    },
  },
]
