import React, {Component} from 'react';
import {Form, reduxForm} from 'redux-form';

class PostsNew extends Component {
	render() {
		return(
			<div>
				PostsNew
			</div>
		);
	}
}
// This is like the connect function from react-redux
// this allows our helper to help reduxForm communicate directly from the component to the reducer
export default reduxForm({
	form: 'PostsNewForm'
})(PostsNew);