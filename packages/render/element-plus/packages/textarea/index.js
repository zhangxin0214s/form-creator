import textarea from './src/textarea.vue';

textarea.install = (App) => {
	App.component(textarea.__name, textarea);
};

export default textarea;
