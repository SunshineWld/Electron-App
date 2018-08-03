import {Button, Layout} from 'antd';
import * as React from 'react';

const {Content} = Layout;

export default class HomePageContent extends React.Component {
  public render() {
    return (
      <Content className="home-page-content">
        <div style={{fontSize: 20}}>This is content</div>
        <Button type="primary" style={{margin: '20px 20px'}} onClick={this.btnClick}>Antd Buttonn</Button>
      </Content>
    )
  }

  private btnClick() {
    alert('antd button clicked');
  }
}
