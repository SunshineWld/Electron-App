import * as React from 'react';
import './app.css';

import HomePage from './component/home-page';

export default class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <HomePage/>
      </div>
    )
  }
}