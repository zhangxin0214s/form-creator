import { createApp } from "vue"
import ElementPlus from "element-plus"

import fcElementPlus from '../../libs/element-plus/packages/index.js'
import "../../libs/element-plus/styles/global.scss"

// import fcElementPlus from 'fc-element-plus'
// import "fc-element-plus/lib/style.css"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from 'pinia'
import "element-plus/dist/index.css"

import {documentEventBind} from '@/config/keyEvent/keyEventBind.js';
import  Draggable  from "@/../lib/vuedraggable/dist/vuedraggable.umd.js"
import SvgIcon from "@/components/svg-icon"
import "virtual:svg-icons-register"
import "./styles/index.scss"
import App from "./App.vue"
const seApp = createApp(App)

seApp.component("SvgIcon", SvgIcon)
seApp.component("draggable", Draggable)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    seApp.component(key, component)
}

const pinia = createPinia();

seApp.use(pinia)
seApp.use(ElementPlus)
seApp.use(fcElementPlus)
seApp.mount("#app")
documentEventBind();
