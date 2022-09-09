import switch from './src/switch.vue';

switch.install = (App) => {
	App.component(switch.__name, switch);
};

export default switch;
