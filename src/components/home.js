import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchBar';
import Recent from './recent';

export default class Home extends Component {
  render() {
    return (
      <div className='app'>
        <div><Logo /></div>
        <div><SearchBar /></div>
        <div><Recent /></div>
      </div>
    );
  }
}
