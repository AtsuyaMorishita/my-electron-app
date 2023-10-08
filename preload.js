const { contextBridge, ipcRenderer } = require("electron");

/**
 * プリロードスクリプト
 * ブラウザでWebページが読み込まれるより前に実行される
 */
contextBridge.exposeInMainWorld("versions", {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke("ping"),
  // 関数だけでなく変数も公開できます
});
