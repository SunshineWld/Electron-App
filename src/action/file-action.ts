import { dialog, MenuItem } from 'electron';
import * as fs from "fs";
import ActionGroup from "./action-group";


class FileAction extends ActionGroup {

  public createMenu(): MenuItem | null {

    const item = new MenuItem({
      label: 'File',
      submenu: [
        {
          accelerator: 'CmdOrCtrl+N',
          click: this.fileNewHandler,
          label: 'New'
        },
        {
          accelerator: 'CmdOrCtrl+O',
          click: this.fileOpenHandler,
          label: 'Open'
        },
        {
          accelerator: 'CmdOrCtrl+S',
          click: this.fileSaveHandler,
          label: 'Save'
        },
        {
          accelerator: 'CmdOrCtrl+W',
          click: this.fileCloseHandler,
          label: 'Close'
        }
      ]
    });
    return item;
  }

  private fileNewHandler(): void {
    dialog.showMessageBox({title: 'Message', message: 'Show Message', detail: 'this is a message box', type: 'error'});
    dialog.showErrorBox('Error', 'this is a error box !!!');
    console.log('file-new ');
  }

  private fileOpenHandler(): void {
    const fileName = dialog.showOpenDialog({title: 'open file', defaultPath: '.', filters: [{name:'*', extensions:['*']}]});
    console.log('file-open ' + fileName);
    fs.readFile(fileName[0], 'utf-8', ((err, data) => {
      if (err) {
        console.log(err);
        throw err;
      } else {
        console.log(data);
      }
    }))
  }

  private fileSaveHandler(): void {
    const fileName = dialog.showSaveDialog({title: 'save file'});
    console.log('file-save ' + fileName);
  }

  private fileCloseHandler(): void {
    console.log('file-close');
  }
}

export default FileAction;