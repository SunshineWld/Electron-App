import {Layout} from 'antd';
import * as React from 'react';

// contextmenu
import {ContextMenu, ContextMenuTrigger, MenuItem} from 'react-contextmenu';

const {Sider} = Layout;

export default class HomePageSider extends React.Component {

  public render() {
    return (
      <Sider className="home-page-sider">
        <div>
          <h3>This is sider</h3>
          <ContextMenuTrigger holdToDisplay={1000}>
            <div className='contextmenu-trigger'>right click to see the menu</div>
          </ContextMenuTrigger>
          <ContextMenu>
            <MenuItem onClick={this.handleClick} data={{item: 'item 1'}}>Menu Item 1</MenuItem>
            <MenuItem onClick={this.handleClick} data={{item: 'item 2'}}>Menu Item 2</MenuItem>
            <MenuItem divider="true"/>
            <MenuItem onClick={this.handleClick} data={{item: 'item 3'}}>Menu Item 3</MenuItem>
          </ContextMenu>
        </div>
      </Sider>
    )
  }

  public handleClick(e, data) {
    global.console.log('click ' + data.item)
  }

}