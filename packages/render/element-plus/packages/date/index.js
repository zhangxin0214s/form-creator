import date from './src/date.vue';


date.install = (App) => {
	App.component(date.name, date);
};

export default date;
