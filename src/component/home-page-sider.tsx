import {Layout} from 'antd';
import * as React from 'react';

// contextmenu
import {ContextMenu, ContextMenuTrigger, MenuItem} from 'react-contextmenu';
import emitter from '../events';

const {Sider} = Layout;

interface IPropsType {
  info: string
  logs: string
};

export default class HomePageSider extends React.Component<{}, IPropsType> {
  public eventEmitter: any;
  public state: IPropsType = {
    info: 'info',
    logs: 'default'
  }

  public render() {
    return (
      <Sider className="home-page-sider">
        <div>
          <h3>This is sider</h3>
          <p>{this.state.info}</p>
          <ContextMenuTrigger holdToDisplay={1000}>
            <div className='contextmenu-trigger'>right click to see the menu</div>
          </ContextMenuTrigger>
          <div>
            <p>{this.state.logs}</p>
          </div>
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
    const log = 'clicked on menu ' + data.item;
    global.console.log(log)
    // this.setState({
    //   info: this.state.info,
    //   logs: log
    // })
  }

  public componentDidMount() {
    // 声明一个自定义事件
    this.eventEmitter = emitter.addListener('callMe', (msg) => {
      global.console.log(msg);
      this.setState({info: msg})
    })
  }

  public comoponentWillUnmount() {
    emitter.removeListener('callMe', this.eventEmitter);
  }

}