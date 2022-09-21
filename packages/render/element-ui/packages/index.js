import input from "./input"
import switch1 from "./switch"
import grid from "./grid"
import tabs from "./tabs"
import card from "./card"
import select from "./select"
m
import textarea from "./textarea"
import divider from "./divider"
import cellPhone from "./cellPhone"
import staticText from "./staticText"
const components = [
    input,
    switch1,
    grid,
    tabs,
    card,
    select,
    textarea,
    divider,
    cellPhone,
    staticText
]

const install = Vue => {
    if (install.installed) { return }
    components.map(item => {
        Vue.component(item.name, item);
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    input,
    switch1,
    grid,
    tabs,
    card,
    select,
    textarea,
    divider,
    cellPhone,
    staticText
}
