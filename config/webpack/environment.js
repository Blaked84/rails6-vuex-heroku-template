const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')
const scss = require('./loaders/scss')

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)
environment.loaders.prepend('scss', scss)
environment.config.resolve.alias = { 'vue$': 'vue/dist/vue.esm.js' }; // <- add alias
module.exports = environment
