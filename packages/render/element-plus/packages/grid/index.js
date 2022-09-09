import grid from './src/grid.vue';

grid.install = (App) => {
	App.component(grid.__name, grid);
};

export default grid;
