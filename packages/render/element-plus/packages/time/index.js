import time from './src/time.vue';

time.install = (App) => {
	App.component(time.name, time);
};

export default time;
