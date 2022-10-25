import table from './src/table.vue';

table.install = (App) => {
	App.component(table.name, table);
};

export default table;
