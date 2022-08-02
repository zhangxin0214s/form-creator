import { createApp } from "vue"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import { registerIcon } from "@/utils/el-icons"
import { VueDraggableNext } from "vue-draggable-next"
import SvgIcon from "@/components/svg-icon"
import "virtual:svg-icons-register"
import "./styles/index.scss"
import App from "./App.vue"
const seApp = createApp(App)

registerIcon(seApp)
seApp.component("svg-icon", SvgIcon)
seApp.component("draggable", VueDraggableNext)

seApp.use(ElementPlus)
seApp.mount("#app")
