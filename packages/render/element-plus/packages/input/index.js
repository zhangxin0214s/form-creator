import input from './src/input.vue';

input.install = (App) => {
	App.component(input.name, input);
};

export default input;
