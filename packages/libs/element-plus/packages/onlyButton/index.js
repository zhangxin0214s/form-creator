import onlyButton from './src/onlyButton.vue';

onlyButton.install = (App) => {
	App.component(onlyButton.name, onlyButton);
};

export default onlyButton;
