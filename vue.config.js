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
        publish: [
          {
            provider: "github", //打包上传到github
            owner: "Westlifers", //仓库所有者
            repo: "SCUCAelectron", //仓库名称
            releaseType: "release" //上传到github的版本类型（draft:草稿，prerelease:提前发行版，release:发行版）
          }
        ],
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
