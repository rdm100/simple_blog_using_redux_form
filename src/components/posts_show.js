import React, {Component} from 'react';
import {showPost} from '../actions/index';
import {connect} from 'react-redux';

class PostsShow extends Component {
	componentDidMount()){
		this.props.showPost();
	}

	render() {
		return(
			<div>posts show</div>
		);
	};

}



export default connect(null, {showPost})(PostsShow);