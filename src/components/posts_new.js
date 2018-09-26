import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component {
	renderTitleField(field){
	return(
		<div className="form-group">
			<label>Title</label>
			<input
				className="form-control"
				type="text"
				{...field.input}
			/>
		</div>
		);
	}

	renderTagsField(field){
		return(
			<div className="form-group">
				<label>Tags</label>
				<input
					className="form-control"
					type="text"
					{...field.input}
				/>
			</div>
		);
	}

	render() {
		return(
			<div>
				<form>
					<Field
						name="title"
						component={this.renderTitleField}
					/>
					<Field
						name="tags"
						component={this.renderTagsField}
					/>
				</form>
			</div> 
		);
	}
}
// This is like the connect function from react-redux
// this allows our reduxForm helper to wrap the PostsNew Component so it can communicate directly from the component to the reducer
export default reduxForm({
	form: 'PostsNewForm'
})(PostsNew);

//the field component is used for event handling and updating different pieces of state and it's up to us to define the component
//prop which will return some amount of jsx that represents the actual element that gets rendered to the screen 

//field.input is an object that contains a bunch of event handlers onChange, onFocus and props like  and field which is the 
//value of the input

//the field argument contains an event handler or 2 that is going to be responsible for making sure that this Field component 
//knows that it is responsible for dealing with this particular text input here 

//the ... means field.input is an object here and I want all of the different properties in it to be communicated as props to the input tag
