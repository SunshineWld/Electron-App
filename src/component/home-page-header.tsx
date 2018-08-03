import {Layout} from 'antd';
import * as React from 'react';

const {Header} = Layout;

export default class HomePageHeader extends React.Component {
  public render() {
    return (
      <Header className="home-page-header">
        <div>This is Header</div>
      </Header>
    )
  }
}