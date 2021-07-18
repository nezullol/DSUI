import React, { Component } from "react";
import Logo from "./logo";
import SearchBar from "./searchBar";
import ResultsPosts from "./resultsPosts";
import * as actions from "../actions";
import { connect } from "react-redux";

class Results extends Component {
	handleSearchBarSubmit(query) {
		this.props.fetchPostsWithQuery(query);
	}

	render() {
		return (
			<div>
				<div>
					<Logo size={55} />
				</div>
				<div>
					<SearchBar
						page='results'
						onSubmit={(query) => this.handleSearchBarSubmit(query)}
					/>
					<ResultsPosts />
				</div>
			</div>
		);
	}
}

export default connect(null, actions)(Results);
