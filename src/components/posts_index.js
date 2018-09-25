import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';

class PostsIndex extends Component{
	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		console.log(this.props.posts);
		return(
			<div>
				Posts Index
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
	posts: state.posts
	};
}

// Using shortcut here instead of using function mapDispatchToProps
export default connect(mapStateToProps, {fetchPosts})(PostsIndex);

