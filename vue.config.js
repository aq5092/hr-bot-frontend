// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/hr-bot-frontend/'  // O'zingizning repo nomingiz
    : '/'
}``
// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,

//   pluginOptions: {
//     vuetify: {
// 			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
// 		}
//   }
// })
