const { app, BrowserWindow,Tray,Menu } = require('electron')
function createWindow () {

    const win = new BrowserWindow({
        // width: 300,
        width: 400,
        height: 400,
        resizable:false,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')
    // win.webContents.openDevTools()
}

let appIcon = null

app.whenReady().then(()=>{

})

app.on('window-all-closed', () => {

    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {

    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
