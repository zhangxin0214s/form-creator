import pagination from './src/pagination.vue';

pagination.install = (App) => {
	App.component(pagination.name, pagination);
};

export default pagination;
