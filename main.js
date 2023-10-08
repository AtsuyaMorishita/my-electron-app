require("update-electron-app")();
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    //プリロードスクリプトの定義
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // const contents = win.webContents;
  // console.log(contents);

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  ipcMain.handle("ping", () => "pong");
  createWindow();

  //mac
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

//windows,linux
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
