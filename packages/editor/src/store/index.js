import { defineStore } from 'pinia'

export const widgetStore = defineStore('widget', {
    state: () =>{
        return {
            widgetList: [], // 舞台上组件列表
            selectedWidget:null // 当前选中组件
        }
    },
    actions: {},
    getters: {}
})