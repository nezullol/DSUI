import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchBar';
export default class Results extends Component {

    handleSearchBarSubmit(query) {
        console.log(query);
    }

    render() {
        return (
            <div>
                <div>
                    <Logo size={55}/>
                </div>
                <div>
                    <SearchBar          
                    onSubmit={(query) => this.handleSearchBarSubmit(query)}
                    />
                </div>
            </div>
        )
    }
}
