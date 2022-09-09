import tabs from './src/tabs.vue';

tabs.install = (App) => {
	App.component(tabs.__name, tabs);
};

export default tabs;
