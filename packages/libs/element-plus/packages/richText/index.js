import richText from './src/richText.vue';


richText.install = (App) => {
	App.component(richText.name, richText);
};

export default richText;
