import card from './src/index.vue';

card.install = (App) => {
	App.component(card.__name, card);
};

export default card;
