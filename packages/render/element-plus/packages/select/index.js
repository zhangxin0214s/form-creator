import select from './src/select.vue';

select.install = (App) => {
	App.component(select.__name, select);
};

export default select;
