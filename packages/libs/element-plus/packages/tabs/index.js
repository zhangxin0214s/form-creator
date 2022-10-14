import tabs from './src/tabs.vue';

tabs.install = (App) => {
	App.component(tabs.name, tabs);
};

export default tabs;
