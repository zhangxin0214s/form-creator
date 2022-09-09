import card from './src/card.vue';


card.install = (App) => {
	App.component(card.__name, card);
};

export default card;
