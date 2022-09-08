import { createApp } from "vue"
import ElementPlus from "element-plus"
import fcElementPlus from '../../render/element-plus/lib/fc-element-plus.es'
import "../../render/element-plus/lib/style.css"
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

seApp.component("svg-icon", SvgIcon)
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
