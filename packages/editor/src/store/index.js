import { defineStore } from 'pinia'
import { generateId,deepClone } from '@/utils/util'
import { formConfig } from '@/config/formConfig.js'
export const widgetStore = defineStore('widget', {
    state: () =>{
        return {
            formConfig: formConfig,
            widgetList: [], // 舞台组件列表
            selectedWidget:null, // 当前选中组件
            cloneWidget:null,// 克隆的组件
        }
    },
    actions: {
        /**
         * 清空舞台
         */
        clearWidget(){
            this.widgetList = [];
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
        }
    },
    getters: {}
})