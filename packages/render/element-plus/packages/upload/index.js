import upload from './src/upload.vue';

upload.install = (App) => {
	App.component(upload.__name, upload);
};

export default upload;
