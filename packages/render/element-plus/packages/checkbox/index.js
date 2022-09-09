import checkbox from './src/checkbox.vue';


checkbox.install = (App) => {
	App.component(checkbox.__name, checkbox);
};

export default checkbox;
