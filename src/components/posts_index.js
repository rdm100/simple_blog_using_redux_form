import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';

class PostsIndex extends Component{
	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		return(
			<div>
				Posts Index
			</div>
		);
	}
}
// Using shortcut here instead of using function mapDispatchToProps
export default connect(null, {fetchPosts})(PostsIndex);