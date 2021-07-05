import React, { Component } from 'react';

import Logo from './logo';
import SearchBar from './searchBar';
import Recent from './recent';

export default class Home extends Component {

  handleSearchBarSubmit = function(query) {
    console.log('trying to handle submit query', query);
    this.props.history.push('/results');
}


  render() {
    return (
      <div className='app'>
        <div><Logo /></div>
        <div><SearchBar
         onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
         </div>
        <div><Recent /></div>
      </div>
    );
  }
}
