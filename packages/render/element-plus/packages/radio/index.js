import radio from './src/radio.vue';


radio.install = (App) => {
	App.component(radio.__name, radio);
};

export default radio;
