import date from './src/date.vue';


date.install = (App) => {
	App.component(date.__name, date);
};

export default date;
