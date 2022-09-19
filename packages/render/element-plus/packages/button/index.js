import button from './src/button.vue';

alert(button.__name)
button.install = (App) => {
	App.component(button.__name, button);
};

export default button;
