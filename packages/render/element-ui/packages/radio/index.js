import radio from './src/radio.vue';


radio.install = (App) => {
	App.component(radio.name, radio);
};

export default radio;
