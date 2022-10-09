import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import eslintPlugin from 'vite-plugin-eslint'
import viteSvgIcons from "vite-plugin-svg-icons"
import monacoEditorPlugin from "vite-plugin-monaco-editor"
import { resolve } from "path"

const prefix = `monaco-editor/esm/vs`;
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    // eslintPlugin({
    //   include: ['src/**/*.js', 'src/**/*.vue', 'src/**/*.ts']
    // }),
    viteSvgIcons({
      // Specify the icon folder to be cached
      iconDirs: [resolve(process.cwd(), "src/icons/svg")],
      // Specify symbolId format
      symbolId: "icon-[dir]-[name]",
    }),
    monacoEditorPlugin({
      languages: ['javascript','typescript','html','css','json']
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        /* 自动引入全局scss文件 */
        additionalData: '@import "./src/styles/global.scss";',
      },
    },
		postcss: {
			plugins: [
				{
					postcssPlugin: 'internal:charset-removal',
					AtRule: {
						charset: (atRule) => {
							if (atRule.name === 'charset') {
								atRule.remove();
							}
						}
					}
				}
			],
		}
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // 路径别名
    },
    extensions: [".js", ".vue", ".json", ".ts"], // 使用路径别名时想要省略的后缀名，可以自己 增减
  },
  optimizeDeps: {
    include: ['@/../lib/vuedraggable/dist/vuedraggable.umd.js']
  },
  server: {
    port: 9000,
  },
  build: {
    //minify: false,
    commonjsOptions: {
      exclude: [
        '/lib/vuedraggable/dist/vuedraggable.umd.js,',  //引号前的逗号不能删，不知何故？？
        //'vue/dist/*.js'
      ],
      include: []
      //requireReturnsDefault: true
    },
    rollupOptions: {
      output: {
        manualChunks: {
          jsonWorker: [`${prefix}/language/json/json.worker`],
          cssWorker: [`${prefix}/language/css/css.worker`],
          htmlWorker: [`${prefix}/language/html/html.worker`],
          tsWorker: [`${prefix}/language/typescript/ts.worker`],
          editorWorker: [`${prefix}/editor/editor.worker`],
        },
      },
    }
  }
})
