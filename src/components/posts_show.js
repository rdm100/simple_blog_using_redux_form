import React, {Component} from 'react';
import {showPost} from '../actions/index';
import {connect} from 'react-redux';

class PostsShow extends Component {
	render() {
		return(
			<div>posts show</div>
		);
	};

}



export default connect(null, {showPost})(PostsShow);