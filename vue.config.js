const { resolve } = require('path');

module.exports = {
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'http://api-driver.marsview.cc/api/mall/',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  },
  // publicPath:'/app',
  // outputDir:'dist',
  // indexPath:'index2.html',
  // lintOnSave:false,
  productionSourceMap:true,
  chainWebpack:(config)=>{
    config.plugins.delete('prefetch');
  },
  configureWebpack: {
    // 路径映射，可以通过这种方式快捷访问src目录的组件或者public里面的文件。
    resolve: {
      alias: {
        '@public': resolve('public'),
        '@': resolve('src')
      },
    },
  },
}