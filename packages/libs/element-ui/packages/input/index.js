import input from "./src/input.vue"
input.install = Vue => {
    Vue.component(input.name, input);
}

export default input