import React, {Component} from 'react';
import {showPost, deletePost} from '../actions/index';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class PostsShow extends Component {
	componentDidMount(){
		// const id = this.props.match.params.id;
		const {id} = this.props.match.params;
		this.props.showPost(id);
	}

	onDeleteClick(){
		const {id} = this.props.match.params;

		this.props.deletePost(id, () => {
			this.props.history.push('/'); 
		});
	}

	render() {
		const {post} = this.props;
		// const post = this.props.posts[this.props.match.params.id];
		
		if(!post){
			return <div>Loading…</div>
		}

		return(
			<div>	
				<Link className="btn btn-primary" to="/">Back to index</Link>
				<button
					className="btn btn-danger pull-xs-right"
					onClick={this.onDeleteClick.bind(this)}
				>
				Delete post
				</button>
				<h3>{post.title}</h3>
				<h6>Categories: {post.categories}</h6>
				<p>{post.content}</p>
			</div>
		);
	}
}

// function mapStateToProps(state){
// 	return {
// 		posts: state.posts
// 	};
// }

function mapStateToProps({posts}, ownProps){
	return {post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {showPost, deletePost})(PostsShow);