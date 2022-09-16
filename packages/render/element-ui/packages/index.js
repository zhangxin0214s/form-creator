import input from "./input"
import switch1 from "./switch"
const components = [
    input,
    switch1
]

const install = Vue => {
    if (install.installed) { return }
    components.map(item => {
        Vue.component(item.name, item);
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    input,
    switch1
}