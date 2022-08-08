import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
    state: () =>{
        return {
            selectedWidget:null
        }
    },
    actions: {},
    getters: {}
})