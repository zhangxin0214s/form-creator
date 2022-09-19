import upload from './src/upload.vue';

upload.install = (App) => {
	App.component(upload.name, upload);
};

export default upload;
