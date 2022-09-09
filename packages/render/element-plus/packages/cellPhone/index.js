import cellPhone from './src/cellPhone.vue';


cellPhone.install = (App) => {
	App.component(cellPhone.__name, cellPhone);
};

export default cellPhone;
