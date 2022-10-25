import switch1 from "./src/switch.vue"
switch1.install = Vue => {
    Vue.component(switch1.name, switch1);
}

export default switch1