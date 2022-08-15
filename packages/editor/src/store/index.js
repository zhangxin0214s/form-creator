import { defineStore } from 'pinia'
import { generateId,deepClone } from '@/utils/util'
export const widgetStore = defineStore('widget', {
    state: () =>{
        return {
            widgetList: [], // 舞台组件列表
            selectedWidget:null, // 当前选中组件
            selectedMaskIndex:0// 当前选定蒙层的索引
        }
    },
    actions: {
        /**
         * 复制组件
         * @param {*} target 
         */
        copyWidget(target){
            let newOrigin = deepClone(target);
            newOrigin.id = generateId();
            this.widgetList.push(newOrigin);
        },
        /**
         * 删除组件
         * @param {*} target 
         */
        removeWidget(target){
            this.widgetList = this.widgetList.filter(item => item.id != target.id)
        }
    },
    getters: {}
})