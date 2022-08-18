import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import eslintPlugin from 'vite-plugin-eslint'
import viteSvgIcons from "vite-plugin-svg-icons"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
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
  ],
  css: {
    preprocessorOptions: {
      scss: {
        /* 自动引入全局scss文件 */
        additionalData: '@import "./src/styles/global.scss";',
      },
    },
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
    }
  }
})
