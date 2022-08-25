import { defineStore } from 'pinia'
import { generateId,deepClone } from '@/utils/util'
import { formConfig } from '@/config/formConfig.js'
import * as command from '@/config/command.js';

export const widgetStore = defineStore('widget', {
    state: () =>{
        return {
            formConfig: formConfig,
            widgetList: [], // 舞台组件列表
            selectedWidget:null, // 当前选中组件
            cloneWidget:null,// 克隆的组件
            isEditor:true,
            dialogCodeVisible:false, // 属性面板代码编辑器
            historyList: [], // 撤销使用的历史列表
            pointer: 0, // 指针
            max: 100, // 最多存储历史数据
        }
    },
    actions: {
        /**
         * 清空舞台
         */
        clearWidget(){
            this.widgetList = [];
            this.selectedWidget = null
        },
        /**
         * 复制组件
         * @param {*} target
         */
        copyWidget(target){
            let newOrigin = deepClone(target);
            newOrigin.id = generateId();

            // 处理栅格 && 标签页内组件
            if(newOrigin.type === 'grid' || newOrigin.type === 'tabs'){
                const cols = newOrigin.options.advanced.cols;
                cols.forEach(col =>{
                    col.widgetList.forEach(widget =>{
                        if(widget){
                            widget.id = generateId();
                        }
                    })
                })
            }
            this.widgetList.push(newOrigin);
        },
        /**
         * 删除组件
         * @param {*} target
         */
        removeWidget(target,parentWidget){
            if(!parentWidget) return;
            parentWidget.forEach((widget,index) =>{
                if(widget.id === target.id){
                    parentWidget.splice(index,1)
                }
            })
            this.selectedWidget = null
            // this.recordHistory({action: 'DELETE_COMPONENT', ...target});
        },

        /**
         * 记录用户操作数据
         * @param {action} 用户指令/动作
         * @param {id} 舞台id
         * @param {options} 组件设置
         */
        recordHistory () {
          // this.historyList.length = 0;
          // command[action](id, options);
          this.historyList.splice(this.pointer, this.historyList.length-1);
          this.historyList.push([...this.widgetList]);
          this.pointer++;
        },

        undo () {
          if (this.pointer-1 < 0) return;
          this.pointer--;
          this.widgetList = this.pointer===0?[]:[...this.historyList[this.pointer-1]];
          // let delComp = this.widgetList.pop();
          // this.historyList.push(delComp);
          // if (this.historyList.length > this.max) {
          //   this.historyList.shift();
          // }
        },

        redo () {
          // TODO: 未完成
          if (this.historyList.length<=0 || this.pointer+1>this.historyList.length) return;
          this.pointer++;
          this.widgetList = [...this.historyList[this.pointer-1]];
          // let addComp = this.historyList.pop();
          // this.widgetList.push(addComp);
        },
    },
    getters: {}
})
