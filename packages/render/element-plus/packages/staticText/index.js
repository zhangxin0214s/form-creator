import staticText from './src/staticText.vue';

staticText.install = (App) => {
	App.component(staticText.__name, staticText);
};

export default staticText;
