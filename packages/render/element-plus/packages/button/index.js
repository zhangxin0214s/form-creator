import button from './src/button.vue';


button.install = (App) => {
	App.component(button.__name, button);
};

export default button;
