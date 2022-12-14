import { defineStore } from 'pinia'
import { generateId, deepClone } from '@/utils/util'
import { formConfig } from '@/config/formConfig.js'
import * as command from '@/config/command.js';

export const widgetStore = defineStore('widget', {
    state: () => {
        return {
            formConfig: formConfig,
            widgetList: [], // 舞台组件列表
            unWatch: null,// 侦听器返回值
            selectedWidget: null, // 当前选中组件
            cloneWidget: null,// 克隆的组件
            isEditor: true,
            dialogCodeVisible: false, // 属性面板代码编辑器
            historyList: [[]], // 撤销使用的历史列表
            pointer: 0, // 指针
            max: 100, // 最多存储历史数据
        }
    },
    actions: {
        /**
         * 清空舞台
         */
        clearWidget() {
            // this.widgetList = [];
            this.widgetList.splice(0);
            this.selectedWidget = null
        },
        
        /**
         * 复制组件
         * @param {*} target
         */
        copyWidget({target,parentWidget,parentWidgetCid}) {
            let newOrigin = deepClone(target);
            newOrigin.id = generateId();
            // 处理栅格 && 标签页内组件
            if (['fcGrid','fcTabs','fcCard'].indexOf(newOrigin.type) > -1) {
                const cols = newOrigin.options.advanced.cols;
                cols.forEach(col => {
                    col.widgetList.forEach(widget => {
                        if (widget) {
                            widget.id = generateId();
                        }
                    })
                })
            }
            if(['fcGrid','fcTabs','fcCard'].indexOf(parentWidget.type)>-1){
                parentWidget.options.advanced.cols[parentWidgetCid].widgetList.push(newOrigin);
                return newOrigin;
            }else {
                console.warn('父容器检测到不是容器组件')
            }
            
        },
        /**
         * 删除组件
         * @param {*} target
         */
        removeWidget({currentWidget, parentWidget, parentWidgetCid}) {
            if (!parentWidget) return;
            if(['fcGrid','fcTabs','fcCard'].indexOf(parentWidget.type)>-1){
                parentWidget.options.advanced.cols[parentWidgetCid].widgetList.forEach((widget, index) => {
                    if (widget.id === currentWidget.id) {
                        parentWidget.options.advanced.cols[parentWidgetCid].widgetList.splice(index, 1)
                    }
                })
            }
            if(parentWidget instanceof Array) {
                parentWidget.forEach((widget, index) => {
                    if (widget.id === currentWidget.id) {
                        parentWidget.splice(index, 1)
                    }
                })
            }
            this.selectedWidget = null
            this.recordHistory();
        },

        /**
         * 记录用户操作数据
         * @param {String} action 用户指令/动作
         * @param {uuid}   id 舞台id
         * @param {Object} options 组件设置
         */
        recordHistory() {
            if (this.pointer !== this.historyList.length - 1) {
                this.historyList.splice(this.pointer + 1, this.historyList.length);
            }

            this.historyList.push([...this.widgetList]);
            this.pointer++;
            if (this.historyList.length - 1 > this.max) {
                this.historyList.shift();
                this.pointer--;
            }
        },

        undo() {
            if (this.pointer - 1 < 0) return;
            this.pointer--;
            // this.widgetList = [...this.historyList[this.pointer]];
            this.widgetList.splice(0,this.widgetList.length,...this.historyList[this.pointer]);
            this.selectedWidget = null
        },

        redo() {
            if (this.pointer + 1 >= this.historyList.length) return;
            this.pointer++;
            
            // this.widgetList = [...this.historyList[this.pointer]];
            this.widgetList.splice(0,this.widgetList.length,...this.historyList[this.pointer]);
            this.selectedWidget = this.widgetList[this.widgetList.length - 1];
        },
    },
    getters: {}
})
