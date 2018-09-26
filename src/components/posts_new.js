import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component {
	renderField(field){
	return(
		<div className="form-group">
			<label>{field.label}</label>
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
						label="Title"
						name="title"
						component={this.renderField}
					/>
					<Field
						label="Categories"
						name="categories"
						component={this.renderField}
					/>
					<Field
						label="Post content"
						name="content"
						component={this.renderField}
					/>
				</form>
			</div> 
		);
	}
}
// The validate function will be called automatically for us at different points during the forms life-cycle, 
//For example when the user tries to submit the form
//values is an object that contains all the different values a user has entered into the form
function validate(values) {
	const errors = {};
	// Validate the inputs from values
	if(values.title.length < 3){
		errors.title = "Enter a title that is at least 3 characters!";
	}
	if(!values.title || values.title.length < 3){
		errors.title = "Enter a title!";
	}
	
	if(!values.categories || values.categories.length < 3){
		errors.categories = "Enter a category with at least 3 characters!";
	}
	
	if(!values.content){
		errors.content = "Enter some content!";
	}

	// If errors is empty the form is fine to submit
	// If the errors object has any properties assigned to it at all redux-form will assume that there is
	// an issue with the form and it failed validation and it should not submit the form at all
	return errors;
}

// This is like the connect function from react-redux
// this allows our reduxForm helper to wrap the PostsNew Component so it can communicate directly from the component to the reducer
export default reduxForm({
	validate: validate,
	form: 'PostsNewForm'
})(PostsNew);

//the field component is used for event handling and updating different pieces of state and it's up to us to define the component
//prop which will return some amount of jsx that represents the actual element that gets rendered to the screen 

//field.input is an object that contains a bunch of event handlers onChange, onFocus and props like  and field which is the 
//value of the input

//the field argument contains an event handler or 2 that is going to be responsible for making sure that this Field component 
//knows that it is responsible for dealing with this particular text input here 

//the ... means field.input is an object here and I want all of the different properties in it to be communicated as props to the input tag
