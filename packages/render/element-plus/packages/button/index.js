import button from './src/button.vue';

button.install = (App) => {
	App.component(button.name, button);
};

export default button;
