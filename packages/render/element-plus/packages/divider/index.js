import divider from './src/divider.vue';


divider.install = (App) => {
	App.component(divider.__name, divider);
};

export default divider;
