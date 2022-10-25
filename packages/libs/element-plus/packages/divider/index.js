import divider from './src/divider.vue';


divider.install = (App) => {
	App.component(divider.name, divider);
};

export default divider;
