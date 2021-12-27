const {BrowserWindow } = require('electron')
const path = require('path')

let win

function create(params) {
    win = new BrowserWindow({
        win: 600,
        height: 400,
        webPreferences: {
            nodeIntegration: true,
            nableRemoteModule: true,
            contextIsolation: false,
        }
    })
    win.loadFile(path.resolve(__dirname, '../../renderer/pages/control/index.html'))
    win.webContents.openDevTools();
}

module.exports = {create}