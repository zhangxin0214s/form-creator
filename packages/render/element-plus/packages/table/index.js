import table from './src/table.vue';

table.install = (App) => {
	App.component(table.__name, table);
};

export default table;
