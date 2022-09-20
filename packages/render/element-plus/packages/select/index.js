import select from './src/select.vue';

select.install = (App) => {
	App.component(select.name, select);
};

export default select;
