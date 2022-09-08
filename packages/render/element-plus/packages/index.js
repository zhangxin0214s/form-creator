import card from './card';
import grid from './grid'

const components = [
	card,
	grid
];

//按需引入
export  { 
	card,
	grid
 };


const install = (App) => {
	components.forEach((item) => {
		App.component(item.__name, item);
	});
};

export default { install };
