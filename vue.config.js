const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      preload: 'src/preload.js',
      nodeIntegration:true,
      builderOptions: {
        nsis: {
          allowToChangeInstallationDirectory: true,
          oneClick: false,
          installerIcon: "./build/icons/icon.ico",  //安装logo
          installerHeaderIcon: "./build/icons/icon.ico" //安装logo
        },
        electronDownload: {
          mirror: "https://npm.taobao.org/mirrors/electron/" //镜像设置
        },
        win: {
          icon: './build/icons/icon.ico' //打包windows版本的logo
        },
        productName: "SCUCAComp",  //应用的名称
      }
    }
  },
})
