import cellPhone from './src/cellPhone.vue';


cellPhone.install = (App) => {
	App.component(cellPhone.name, cellPhone);
};

export default cellPhone;
