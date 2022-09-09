import onlyButton from './src/onlyButton.vue';

onlyButton.install = (App) => {
	App.component(onlyButton.__name, onlyButton);
};

export default onlyButton;
