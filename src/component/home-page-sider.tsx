import {Layout} from 'antd';
import * as React from 'react';

const {Sider} = Layout;

export default class HomePageSider extends React.Component {
  public render() {
    return (
      <Sider className="home-page-sider">
        <div className="sider">This is Sider</div>
      </Sider>
    )
  }
}