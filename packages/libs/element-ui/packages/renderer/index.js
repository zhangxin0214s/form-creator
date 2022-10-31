import renderer from "./src/index.vue"
renderer.install = Vue => {
    Vue.component(renderer.name, renderer);
}

export default renderer