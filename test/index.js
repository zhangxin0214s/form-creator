const widgetList = [
    {
        "id": "9e8dd1ff8d6c4067808906c931ddaba8",
        "name": "栅格",
        "type": "fcGrid",
        "category": "container",
        "icon": "lattice",
        "value": null,
        "ruleFormKey": null,
        "ruleFormKeyType": "object",
        "options": {
            "basic": {
                "name": {
                    "label": "唯一名称",
                    "value": "栅格1"
                },
                "colHeight": {
                    "label": "统一高度",
                    "value": 36
                },
                "rowBackground": {
                    "label": "背景颜色",
                    "value": "#FFFFFF"
                },
                "ruleFormKey": {
                    "label": "参数key",
                    "value": ""
                },
                "isHidden": {
                    "label": "隐藏组件",
                    "value": false
                },
                "ruleFormKeyType": {
                    "label": "参数类型",
                    "value": "object",
                    "options": [
                        {
                            "label": "对象",
                            "value": "object"
                        },
                        {
                            "label": "数组",
                            "value": "array"
                        }
                    ]
                },
                "isMoveDivider": {
                    "label": "是否上下移动",
                    "value": false
                },
                "moveDistance": {
                    "label": "移动距离",
                    "value": 0
                }
            },
            "advanced": {
                "cols": [
                    {
                        "id": 1,
                        "gutter": 12,
                        "widgetList": [
                            {
                                "id": "706f5abaa6c44be780e9f8999991eeb1",
                                "name": "栅格",
                                "type": "fcGrid",
                                "category": "container",
                                "icon": "lattice",
                                "value": null,
                                "ruleFormKey": null,
                                "ruleFormKeyType": "object",
                                "options": {
                                    "basic": {
                                        "name": {
                                            "label": "唯一名称",
                                            "value": "栅格1"
                                        },
                                        "colHeight": {
                                            "label": "统一高度",
                                            "value": 36
                                        },
                                        "rowBackground": {
                                            "label": "背景颜色",
                                            "value": "#FFFFFF"
                                        },
                                        "ruleFormKey": {
                                            "label": "参数key",
                                            "value": ""
                                        },
                                        "isHidden": {
                                            "label": "隐藏组件",
                                            "value": false
                                        },
                                        "ruleFormKeyType": {
                                            "label": "参数类型",
                                            "value": "object",
                                            "options": [
                                                {
                                                    "label": "对象",
                                                    "value": "object"
                                                },
                                                {
                                                    "label": "数组",
                                                    "value": "array"
                                                }
                                            ]
                                        },
                                        "isMoveDivider": {
                                            "label": "是否上下移动",
                                            "value": false
                                        },
                                        "moveDistance": {
                                            "label": "移动距离",
                                            "value": 0
                                        }
                                    },
                                    "advanced": {
                                        "cols": [
                                            {
                                                "id": 1,
                                                "gutter": 12,
                                                "widgetList": [
                                                    {
                                                        "id": "4808e7d8973e45818d8ef67beae8ccb8",
                                                        "name": "开关",
                                                        "type": "fcSwitch",
                                                        "category": "widget",
                                                        "icon": "switch",
                                                        "value": false,
                                                        "ruleFormKey": null,
                                                        "rules": [],
                                                        "options": {
                                                            "basic": {
                                                                "name": {
                                                                    "label": "唯一名称",
                                                                    "value": "开关"
                                                                },
                                                                "label": {
                                                                    "label": "标签",
                                                                    "value": "是否启用开关:"
                                                                },
                                                                "ruleFormKey": {
                                                                    "label": "参数key",
                                                                    "value": ""
                                                                },
                                                                "isHidden": {
                                                                    "label": "隐藏组件",
                                                                    "value": false
                                                                },
                                                                "required": {
                                                                    "label": "是否必填",
                                                                    "value": false,
                                                                    "message": ""
                                                                },
                                                                "disabled": {
                                                                    "label": "是否禁用",
                                                                    "value": false
                                                                },
                                                                "marginAdjustment": {
                                                                    "label": "外边距调整",
                                                                    "options": [
                                                                        {
                                                                            "label": "左边距",
                                                                            "icon": "Back",
                                                                            "value": 0
                                                                        },
                                                                        {
                                                                            "label": "上边距",
                                                                            "icon": "Top",
                                                                            "value": 0
                                                                        },
                                                                        {
                                                                            "label": "右边距",
                                                                            "icon": "Right",
                                                                            "value": 0
                                                                        },
                                                                        {
                                                                            "label": "下边距",
                                                                            "icon": "Bottom",
                                                                            "value": 0
                                                                        }
                                                                    ]
                                                                }
                                                            },
                                                            "advanced": {
                                                                "linkage": {
                                                                    "label": "联动对象",
                                                                    "options": [
                                                                        {
                                                                            "label": "栅格1",
                                                                            "value": "9e8dd1ff8d6c4067808906c931ddaba8",
                                                                            "children": [
                                                                                {
                                                                                    "label": "栅格1",
                                                                                    "value": "706f5abaa6c44be780e9f8999991eeb1",
                                                                                    "children": []
                                                                                }
                                                                            ]
                                                                        }
                                                                    ],
                                                                    "value": []
                                                                },
                                                                "linkageCode": {
                                                                    "label": "联动代码",
                                                                    "value": "//#region\n/*\nwidget:当前元素;\nlinkageObj:联动对象\ncopyWidget:复制方法\n*/ \n//#endregion "
                                                                }
                                                            },
                                                            "events": {
                                                                "onBeforeMount": {
                                                                    "label": "渲染前",
                                                                    "value": ""
                                                                },
                                                                "onMounted": {
                                                                    "label": "渲染完成",
                                                                    "value": ""
                                                                },
                                                                "onChange": {
                                                                    "label": "change事件",
                                                                    "value": ""
                                                                }
                                                            }
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                "id": 2,
                                                "gutter": 12,
                                                "widgetList": []
                                            }
                                        ]
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "gutter": 12,
                        "widgetList": []
                    }
                ]
            }
        }
    }
]
function getParentById(currentWidget, widgetList) {
    let stack = [...widgetList];
    let target = [];
    while (stack.length) {
      let node = stack.pop();
      if (['fcGrid', 'fcTabs', 'fcCard'].indexOf(node.type) > -1) {
        node.options.advanced.cols.forEach((c) => {
          stack.push(...c.widgetList);
          c.widgetList.forEach(widget => {
            if(widget.id === currentWidget) {
              target.push(node)
            }
          })
        });
      }
    }
    return target;
  }
  getParentById('4808e7d8973e45818d8ef67beae8ccb8', widgetList)