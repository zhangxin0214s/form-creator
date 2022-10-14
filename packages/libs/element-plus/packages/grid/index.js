import grid from './src/grid.vue';

grid.install = (App) => {
	App.component(grid.name, grid);
};

export default grid;
