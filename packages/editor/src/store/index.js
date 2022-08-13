import { defineStore } from 'pinia'

export const widgetStore = defineStore('widget', {
    state: () =>{
        return {
            widgetList: [], // 舞台组件列表
            selectedWidget:null, // 当前选中组件
            selectedMaskIndex:0// 当前选定蒙层的索引
        }
    },
    actions: {},
    getters: {}
})