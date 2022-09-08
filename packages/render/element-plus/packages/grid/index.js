import grid from './src/grid.vue';

grid.install = (App) => {
	App.component(card.__name, grid);
};

export default grid;
