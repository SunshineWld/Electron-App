import {Menu} from 'electron';
import EditAction from "./edit-action";
import FileAction from "./file-action";

export class ActionManager {

  private mEditAction: EditAction = new EditAction();
  private mFileAction: FileAction = new FileAction();

  public setup(): void {
    this.setupMainMenu();
  }

  private setupMainMenu(): void {
    const menu = new Menu();
    const appMenuItem = Menu.getApplicationMenu().items[0];
    menu.insert(0, appMenuItem);

    const fileMenu = this.mFileAction.createMenu();
    menu.insert(1, fileMenu);

    const editMenu = this.mEditAction.createMenu();
    menu.insert(2, editMenu);

    Menu.setApplicationMenu(menu);
  }

}