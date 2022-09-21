import card from "./src/card.vue"
card.install = Vue => {
    Vue.component(card.name, card);
}

export default card