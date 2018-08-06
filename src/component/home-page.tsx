import {Layout} from 'antd';
import HomePageContent from './home-page-content';
import HomePageHeader from './home-page-header';
import HomePageSider from './home-page-sider';

import * as React from 'react';
import './home-page.css';

export default class HomePage extends React.Component {
  public render() {
    return (
      <div className="home">
        <Layout>
          <HomePageHeader/>
        </Layout>
        <Layout>
          <HomePageSider/>
          <HomePageContent/>
        </Layout>
      </div>
    )
  }
}