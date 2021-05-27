import React, { Component } from 'react';

export default class Recent extends Component {
	render() {
		return (
			<div className='recent-posts'>
				<div className='recent-post-wrapper'>
					<div className='recent-post-heading'>Recent Posts</div>
					<ul className='recent-posts__posts'>
						<li>recent posts 0</li>
						<li>recent posts 1</li>
						<li>recent posts 2</li>
					</ul>
				</div>
			</div>
		);
	}
}
