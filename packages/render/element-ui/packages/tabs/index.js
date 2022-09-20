import tabs from "./src/tabs.vue"
tabs.install = Vue => {
    Vue.component(tabs.name, tabs);
}

export default tabs