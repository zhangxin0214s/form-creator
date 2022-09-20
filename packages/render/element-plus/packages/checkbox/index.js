import checkbox from './src/checkbox.vue';


checkbox.install = (App) => {
	App.component(checkbox.name, checkbox);
};

export default checkbox;
