import card from './src/card.vue';


card.install = (App) => {
	App.component(card.name, card);
};

export default card;
