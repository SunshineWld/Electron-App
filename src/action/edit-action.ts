import { clipboard, Data, MenuItem } from 'electron';
import ActionGroup from "./action-group";

class EditAction extends ActionGroup {

  public createMenu(): MenuItem | null {
    const item = new MenuItem({
      label: 'Edit',
      submenu: [
        {
          accelerator: 'CmdOrCtrl+Z',
          label: 'Undo',
          role: 'undo'
        },
        {
          accelerator: 'Shift+CmdOrCtrl+Z',
          label: 'Redo',
          role: 'redo'
        },
        {
          type: 'separator'
        },
        {
          accelerator: 'CmdOrCtrl+X',
          click: this.cutHandler,
          label: 'Cut',
          // role: 'cut'
        },
        {
          accelerator: 'CmdOrCtrl+C',
          click: this.copyHandler,
          label: 'Copy',
          // role: 'copy'
        },

        {
          accelerator: 'CmdOrCtrl+V',
          click: this.pasteHandler,
          label: 'Paste',
          // role: 'paste'
        }
      ]
    });

    return item;
  }

  private copyHandler(): void {
    console.log('copy');
    const data: Data = ({
      text: 'copy copy'
    });
    clipboard.write(data);
  }

  private cutHandler(): void {
    console.log('cut');
    clipboard.writeText('cut cut');
  }

  private pasteHandler(): void {
    const value = clipboard.readText();
    console.log('paste: ' + value);
  }
}

export default EditAction;