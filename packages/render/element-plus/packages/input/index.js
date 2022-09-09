import input from './src/input.vue';

input.install = (App) => {
	App.component(input.__name, input);
};

export default input;
