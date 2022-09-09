import richText from './src/richText.vue';


richText.install = (App) => {
	App.component(richText.__name, richText);
};

export default richText;
