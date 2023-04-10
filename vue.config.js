const { defineConfig } = require('@vue/cli-service')
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = defineConfig({
  transpileDependencies: true,
  // 配置打包后静态资源路径,解决白屏问题
  publicPath: './',
  devServer: {
    open: true,
    port: 8080,
    host: 'localhost',
    https: false
  },
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      new WindiCSSWebpackPlugin()
    ]
  },
  // 关闭eslint
  lintOnSave: false
})
