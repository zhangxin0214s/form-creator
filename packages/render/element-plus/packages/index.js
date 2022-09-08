import card from './card';


const components = [card];

//按需引入
export { 
	card
 };


const install = (App) => {
	components.forEach((item) => {
		App.component(item.__name, item);
	});
};

export default { install };
