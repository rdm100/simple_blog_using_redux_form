import React, {Component} from 'react';
import {showPost} from '../actions/index';
import {connect} from 'react-redux';

class PostsShow extends Component {
	componentDidMount(){
		// const id = this.props.match.params.id;
		const {id} = this.props.match.params;
		this.props.showPost(id);
	}

	render() {
		
		const post = this.props.posts[this.props.match.params.id];
		
		if(!post){
			return <div>Loading…</div>
		}

		return(
			<div>
				<h3>{post.title}</h3>
				<h6>Categories: {post.categories}</h6>
				<p>{post.content}</p>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		posts: state.posts
	};
}


export default connect(mapStateToProps, {showPost})(PostsShow);