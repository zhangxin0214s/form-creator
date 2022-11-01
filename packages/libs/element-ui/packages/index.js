// 容器组件
import grid from "./grid"
import tabs from "./tabs"
import card from "./card"

// 基础组件
import input from "./input"
import switch1 from "./switch"
import checkbox from './checkbox'
import button from './button'
import select from './select'
import radio from './radio'
import textarea from './textarea'
import divider from './divider'
import cellPhone from './cellPhone'
import staticText from './staticText'
import time from './time'
import date from './date'


// 渲染器
import renderer from './renderer'

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
    staticText,
    checkbox,
    button,
    radio,
    time,
    date,
    renderer
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
    staticText,
    checkbox,
    button,
    radio,
    time,
    date,
    renderer
}
