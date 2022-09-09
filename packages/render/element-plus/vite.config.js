import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const { resolve } = require('path');

export default defineConfig({
	plugins: [vue()],
	pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
	css: {
		preprocessorOptions: {
		  scss: {
			/* 自动引入全局scss文件 */
			additionalData: '@import "./styles/global.scss";',
		  },
		}
	},
	build: {
		outDir: 'lib',
		lib: {
			entry: resolve(__dirname, 'packages/index.js'),
			name: 'fc-element-plus',
			fileName: 'fc-element-plus',
		},
		rollupOptions: {
			// 确保外部化处理那些你不想打包进库的依赖
			external: ['vue'],
			output: {
				// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
				globals: {
					vue: 'Vue',
				},
			},
		},
	},
});
