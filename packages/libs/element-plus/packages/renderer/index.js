import renderer from './src/index.vue';


renderer.install = (App) => {
	App.component(renderer.name, renderer);
};

export default renderer;
