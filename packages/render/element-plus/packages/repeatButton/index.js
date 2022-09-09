import repeatButton from './src/repeatButton.vue';


repeatButton.install = (App) => {
	App.component(repeatButton.__name, repeatButton);
};

export default repeatButton;
