import {Button, Layout} from 'antd';
import * as React from 'react';

const {Content} = Layout;
import emitter from '../events';

// tslint:disable:no-console
export default class HomePageContent extends React.Component {
  public render() {

    const cb = () => {
      emitter.emit('callMe','content emit button clicked');
    }

    return (
      <Content className="home-page-content">
        <Button type="primary" style={{margin: '20px 20px'}} onClick={this.btnClick}>Antd Buttonn</Button>
        <div style={{fontSize: 20}}>This is content</div>
        <Button type="primary" style={{margin: '20px 20px'}} onClick={cb}>Emit</Button>
      </Content>
    )
  }

  public btnClick() {
    alert('button clicked');
  }
}
