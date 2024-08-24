import path from "node:path";
import "../config/config.js";
import { app, BrowserWindow, ipcMain } from "electron";
import { initializeIpcHandlers } from "../handlers/ipc.js";

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 1600,
        height: 900,
        minWidth: 500,
        minHeight: 600,
        darkTheme: true,
        webPreferences: {
            preload: path.join(__dirname, '..', 'clientPreload.js'),
        },
        show: false
    });


    ipcMain.on("showMainFrame", () => {
        mainWindow.show();
    });

    ipcMain.on("closeApp", () => {
        mainWindow.close();
        app.quit();
    });

    // mainWindow.loadURL("http://localhost:3000");
    mainWindow.loadFile(path.join(app.getAppPath(), "./build/react-ui/index.html"));
};

app.whenReady().then(() => {
    initializeIpcHandlers();
    createWindow();
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin')
        app.quit();
});
