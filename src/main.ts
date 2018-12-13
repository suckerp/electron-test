import { app, BrowserWindow } from 'electron'
import path = require('path')

let mainWindow: Electron.BrowserWindow | undefined

function createWindow() {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800
    })

    console.log(path.join(__dirname, "../index.html"))

    mainWindow.loadFile(path.join(__dirname, "../index.html"))

    mainWindow.webContents.openDevTools()

    mainWindow.on('closed', ()=> {
        mainWindow = undefined
    })

    
}

app.on("ready", createWindow)

app.on("window-all-closed", () => {
    if (process.platform != "darwin") {
        app.quit
    }
})

app.on("activate", () => {
    if (mainWindow == undefined) {
        createWindow
    }
})

