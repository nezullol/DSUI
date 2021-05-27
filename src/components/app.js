import React, { Component } from 'react';
import Logo from './logo';
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div><Logo /></div>
        <div>Search</div>
        <div>Recent Post</div>
      </div>
    );
  }
}
