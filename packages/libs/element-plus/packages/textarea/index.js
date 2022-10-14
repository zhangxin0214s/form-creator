import textarea from './src/textarea.vue';

textarea.install = (App) => {
	App.component(textarea.name, textarea);
};

export default textarea;
