import time from './src/time.vue';

time.install = (App) => {
	App.component(time.__name, time);
};

export default time;
