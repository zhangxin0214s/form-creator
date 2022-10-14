import repeatButton from './src/repeatButton.vue';


repeatButton.install = (App) => {
	App.component(repeatButton.name, repeatButton);
};

export default repeatButton;
