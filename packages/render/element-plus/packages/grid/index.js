import grid from './src/index.vue';

grid.install = (App) => {
	App.component(card.__name, grid);
};

export default grid;
