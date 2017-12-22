import React, { Component } from 'react';
import Menu from './components/Menu/Menu.jsx';
import UserBlock from './components/LeftDash/UserBlock.jsx';
import MiddleBLock from './components/MiddleDash/MiddleBlock';
import './App.css';

class App extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      
      <div className="container">
        <Menu />
        <UserBlock />
        <MiddleBLock />
      </div>
      
    );
  }
}

export default App;