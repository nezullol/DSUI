import React, { Component } from 'react';

import { connect } from 'react-redux';


 class ResultsPosts extends Component {
    render() {
        return (
            <div>
                <div className="results-posts"></div>
                <div className="results-posts___wrapper"></div>
                <ul className="results-posts___posts">
                    Results Go HERE
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {  state  }
}

export default connect(mapStateToProps)(ResultsPosts)