import React, { Component } from 'react';

import Logo from './logo';
import SearchBar from './searchBar';
import Recent from './recent';
import { connect } from 'react-redux';
import * as actions from '../actions'

 class Home extends Component {

  handleSearchBarSubmit = function(query) {
    this.props.fetchPostsWithQuery(query)

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


export default connect(null, actions)(Home);