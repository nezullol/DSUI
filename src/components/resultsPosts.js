import React, { Component } from "react";

import Post from "./post";
import { connect } from "react-redux";

class ResultsPosts extends Component {
	renderPosts() {
		const posts = this.props.posts.map((post, index) => {
			return <Post type='result' key={index} {...post} />;
		});
		return posts;
	}

	render() {
		return (
			<div>
				<div className='results-posts'></div>
				<div className='results-posts__wrapper'></div>
				<ul className='results-posts__posts'>{this.renderPosts()}</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts.resultsPosts,
	};
}

export default connect(mapStateToProps)(ResultsPosts);
