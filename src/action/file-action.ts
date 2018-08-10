import { dialog, MenuItem } from 'electron';
import ActionGroup from "./action-group";

class FileAction extends ActionGroup {

  public createMenu(): MenuItem | null {
    const item = new MenuItem({
      label: 'File',
      submenu: [
        {
          accelerator: 'CmdOrCtrl+N',
          click: this.fileNewHandler,
          label: 'New',
          role: 'new'
        },
        {
          accelerator: 'CmdOrCtrl+O',
          click: this.fileOpenHandler,
          label: 'Open',
          role: 'open'
        },
        {
          accelerator: 'CmdOrCtrl+S',
          click: this.fileSaveHandler,
          label: 'Save',
          role: 'save'
        },
        {
          accelerator: 'CmdOrCtrl+W',
          click: this.fileCloseHandler,
          label: 'Close',
          role: 'close'
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
    const fileName = dialog.showOpenDialog({title: 'open file', defaultPath: '.', filters: [{name:'*', extensions:['js']}]});
    console.log('file-open ' + fileName);
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