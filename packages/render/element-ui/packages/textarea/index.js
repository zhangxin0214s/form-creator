import textarea from "./src/textarea.vue"
textarea.install = Vue => {
    Vue.component(textarea.name, textarea);
}

export default textarea