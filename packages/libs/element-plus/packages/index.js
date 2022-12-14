// 容器组件
import card from './card';
import grid from './grid'
import tabs from './tabs'
import table from './table'

// 基础组件
import input from './input'
import switch1 from './switch'
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
import pagination from './pagination'

// 高级组件
import repeatButton from './repeatButton'
import onlyButton from './onlyButton'
import upload from './upload'
import richText from './richText'

// 渲染器
import renderer from './renderer'

// hooks
import useRegisterEvent from './hooks/useRegisterEvent'

const components = [
	card,
	grid,
	tabs,
	table,
	input,
	checkbox,
	button,
	select,
	radio,
	textarea,
	divider,
	cellPhone,
	staticText,
	time,
	date,
	repeatButton,
	onlyButton,
	upload,
	richText,
	switch1,
	pagination,
	renderer
];

//按需引入
export  {
	card,
	grid,
	tabs,
	table,
	input,
	checkbox,
	button,
	select,
	radio,
	textarea,
	divider,
	cellPhone,
	staticText,
	time,
	date,
	repeatButton,
	onlyButton,
	upload,
	richText,
	switch1,
	pagination,
	renderer,
	
	useRegisterEvent
 };


const install = (App) => {
	components.forEach((item) => {
		App.component(item.name, item);
	});
};

export default { install };
