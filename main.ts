// Modules to control application life and create native browser window
import {app, BrowserWindow} from 'electron'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow() {

  // Create the browser window.
  // 在加载页面时，渲染进程第一次完成绘制时，会发出ready-to-show事件. 在此事件后显示窗口将没有视觉闪烁
  // mainWindow = new BrowserWindow({width: 800, height: 600, show: false, backgroundColor: '#ff0000'})
  // mainWindow.once('ready-to-show', () => {
  //     mainWindow.show()
  // })

  // 对于一个复杂的应用，ready-to-show事件可能会发出的太晚，会让应用感觉缓慢，在这种情况下，建议立即显示窗口
  // 还可以设置背景颜色
  mainWindow = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  // 加载本地HTML文件
  // mainWindow.loadURL("file://"+__dirname+"/dist/index.html")
  mainWindow.loadURL("file://" + __dirname + "/index.html")

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

app.on('ready', () => {
  createWindow()
})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
