import card from './card';
import grid from './grid'

const components = [card];

//按需引入
export default { 
	card,
	grid
 };


const install = (App) => {
	components.forEach((item) => {
		App.component(item.__name, item);
	});
};

// export default { install };
