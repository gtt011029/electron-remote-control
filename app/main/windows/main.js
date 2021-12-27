const {app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
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
    if (isDev) {
        console.log(isDev)
        win.loadURL('http://localhost:3000/')
    } else {
        win.loadFile(path.resolve(__dirname, '../../renderer/pages/main/index.html'))
    }
    win.webContents.openDevTools();
}

function send(channel, ...args) {
    win.webContents.send(channel, ...args)
}

module.exports = {create, send}