import { createApp } from "vue"
import ElementPlus from "element-plus"
import Vtmp from "vtmp-ui"
import 'vtmp-ui/es/style.js'
import { createPinia } from 'pinia'
import "element-plus/dist/index.css"
import { registerIcon } from "@/utils/el-icons"
import  Draggable  from "@/../lib/vuedraggable/dist/vuedraggable.umd.js"
import SvgIcon from "@/components/svg-icon"
import "virtual:svg-icons-register"
import "./styles/index.scss"
import App from "./App.vue"
const seApp = createApp(App)
registerIcon(seApp)
seApp.component("svg-icon", SvgIcon)
seApp.component("draggable", Draggable)

const pinia = createPinia();

seApp.use(Vtmp)
seApp.use(pinia)
seApp.use(ElementPlus)
seApp.mount("#app")
