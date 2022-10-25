import grid from "./src/grid.vue"
grid.install = Vue => {
    Vue.component(grid.name, grid);
}

export default grid