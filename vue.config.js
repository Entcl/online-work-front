const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    /* 输出文件目录：在npm run build时，生成文件的目录名称 */
    publicPath: "./",
}, )