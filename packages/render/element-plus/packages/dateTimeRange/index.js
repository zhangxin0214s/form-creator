import dateTimeRange from './src/dateTimeRange.vue';


dateTimeRange.install = (App) => {
	App.component(dateTimeRange.__name, dateTimeRange);
};

export default dateTimeRange;
