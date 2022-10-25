import select from "./src/select.vue"
select.install = Vue => {
    Vue.component(select.name, select);
}

export default select
