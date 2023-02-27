import {BrowserWindow, ipcMain} from 'electron'
import {MacUpdater, NsisUpdater, UpdateInfo} from 'electron-updater'

/**
 * @description: 应用检查更新相关逻辑
 * @param {BrowserWindow} window
 * @return {*}
 */
const IPC = {
    // 开始检查更新
    CHECK_UPDATA: 'UPDATA_CHECKING',
    // 正在检查更新
    UPDATA_CHECKING: 'UPDATA_CHECKING',
    // 检查更新出错
    UPDATA_ERROR: 'UPDATA_ERROR',
    // 检查到新版本
    UPDATA_AVAILABLE: 'UPDATA_AVAILABLE',
    // 已经是新版本
    UPDATA_NOT_AVAILABLE: 'UPDATA_NOT_AVAILABLE',
    // 更新下载完毕
    UPDATA_DOWNLOADED: 'UPDATA_DOWNLOADED',
    // 更新下载完毕但用户取消安装
    UPDATA_DOWNLOADED_NOT_INSTALLED: 'UPDATA_DOWNLOADED_NOT_INSTALLED',
    // 更新下载完毕但用户取消安装后关闭强制更新
    UPDATA_DOWNLOADED_QUIT_INSTALL: 'UPDATA_DOWNLOADED_QUIT_INSTALL',
    // 立即更新
    UPDATA_QUITANDINSTALL: 'UPDATA_QUITANDINSTALL',
}
let autoUpdater: NsisUpdater | MacUpdater
let UPDATA_DOWNLOADED_NOT_INSTALLED = false

export { autoUpdater, UPDATA_DOWNLOADED_NOT_INSTALLED }
export default (window: BrowserWindow): void => {
    // 实例化 autoUpdater

    if (process.platform === 'darwin') {
        autoUpdater = new MacUpdater({
            provider: 'generic',
            url: 'https://646d-dmhc-947ccf-1302828448.tcb.qcloud.la/electron'
        })
    }

    // window 系统删除 build 目录
    if (process.platform === 'win32') {
        autoUpdater = new NsisUpdater({
            provider: 'generic',
            url: 'https://646d-dmhc-947ccf-1302828448.tcb.qcloud.la/electron'
        })
    }

    if (!autoUpdater) {
        return
    }

    // 正在检查更新
    autoUpdater.on('checking-for-update', () => {
        window.webContents.send(IPC.UPDATA_CHECKING, {
            message: '正在检查更新'
        })
    })

    // 检查更新出错
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    autoUpdater.on('error', (error: UpdateInfo) => {
        window.webContents.send(
            IPC.UPDATA_ERROR,
            {
                message: '检查更新出错'
            },
            error
        )
    })

    // 检查到新版本
    autoUpdater.on('update-available', (info: UpdateInfo) => {
        window.webContents.send(IPC.UPDATA_AVAILABLE, {
            message: `检查到新版本 v ${info.version}，开始下载`
        })
    })

    // 已经是新版本
    autoUpdater.on('update-not-available', (info: UpdateInfo) => {
        window.webContents.send(IPC.UPDATA_NOT_AVAILABLE, {
            message: `当前版本已经是最新 v ${info.version}`
        })
    })

    // 更新下载中
    autoUpdater.on('download-progress', ({ percent }: { percent: number }) => {
        window.setProgressBar(percent / 100)
    })

    // 更新下载完毕
    autoUpdater.on('update-downloaded', () => {
        window.webContents.send(IPC.UPDATA_DOWNLOADED)
    })

    // 取消立即更新
    ipcMain.handle(IPC.UPDATA_DOWNLOADED_NOT_INSTALLED, () => {
        UPDATA_DOWNLOADED_NOT_INSTALLED = true
    })

    // 点击 检查更新
    ipcMain.handle(IPC.CHECK_UPDATA, () => {
        autoUpdater.checkForUpdatesAndNotify()
    })

    // 点击 立即更新
    ipcMain.handle(IPC.UPDATA_QUITANDINSTALL, () => {
        autoUpdater.quitAndInstall()
    })

    autoUpdater.checkForUpdatesAndNotify()

    setInterval(() => {
        autoUpdater.checkForUpdatesAndNotify()
    }, 1000 * 60 * 5)
}
