//改文件为新增文件，vue.config.js配置
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
  }
  
module.exports = {
    // 修改 pages 入口
    pages: {
        index: {
            entry: 'examples/main.js', // 入口
            template: 'public/index.html', // 模板
            filename: 'index.html' // 输出文件
        }
    },
    css: {
        loaderOptions: {
          sass: {
            data: ` @import "./examples/styles/variables.scss";
                    @import "./examples/styles/mixin.scss";
                     `
          },
          scss: {
            prependData: ` @import "./examples/styles/variables.scss"; `
          }
        }
    },
    lintOnSave:false,
    // 扩展 webpack 配置
    chainWebpack: config => {
        // @ 默认指向 src 目录，这里要改成 examples
        // 另外也可以新增一个 ~ 指向 packages
        config.resolve.alias
            .set('@', path.resolve('examples'))
            .set('~', path.resolve('packages'))
        // 把 packages 和 examples 加入编译，因为新增的文件默认是不被 webpack 处理的
        config.module
            .rule('js')
            .include.add(/packages/)
            .end()
            .include.add(/examples/)
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options
            })
        // when there are many pages, it will cause too many meaningless requests
        config.plugins.delete('prefetch')

        // set svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('examples/icons'))
            .end()
            config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('examples/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
        .end()
    }
}