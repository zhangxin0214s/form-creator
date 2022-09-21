import staticText from './src/staticText.vue';

staticText.install = (App) => {
	App.component(staticText.name, staticText);
};

export default staticText;
