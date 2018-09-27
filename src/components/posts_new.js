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
			{field.meta.error}
		</div>
		);
	}

	onSubmit(values) {
		console.log(values);
	}

	render() {
		const {handleSubmit} = this.props;

		return(
			<div>
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div> 
		);
	}
}
// The validate function will be called automatically for us at different points during the forms life-cycle, 
//For example when the user tries to submit the form reduxForm calls validate()
//values is an object that contains all the different values a user has entered into the form
function validate(values) {
	const errors = {};
	// Validate the inputs from values
	if(!values.title || values.title.length < 3){
		errors.title = "Enter a title longer than 3 characters!";
	}

	if(!values.categories){
		errors.categories = "Enter a category!";
	}
	
	if(!values.content){
		errors.content = "Enter some content please!";
	}

	// If errors is empty the form is fine to submit
	// If the errors object has any properties assigned to it at all redux-form will assume that there is
	// an issue with the form and it failed validation and it should not submit the form at all
	return errors;
}

// This is like the connect function from react-redux
// this allows our reduxForm helper to wrap the PostsNew Component so it can communicate directly from the component to the reducer
export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(PostsNew);

//the field component is used for event handling and updating different pieces of state and it's up to us to define the component
//prop which will return some amount of jsx that represents the actual element that gets rendered to the screen 

//field.input is an object that contains a bunch of event handlers onChange, onFocus and props like and field which is the 
//value of the input

//the field object argument contains an event handler or 2 that is going to be responsible for making sure that this Field component 
//knows that it is responsible for dealing with this particular text input here 

//the ... means field.input is an object here and I want all of the different properties in it to be communicated as props to the input tag


//onSubmit={handleSubmit(this.onSubmit.bind(this)) When the user submits the form handleSubmit handles the redux-form side of things
//and if the form passes validation it calls the onSubmit Function that I have written and passes the values out of the form to work with
//.bind(this)Is called on the this.onSubmit function because we are passing this.onSubmit as a callback function and it will be executed in some
// different context outside the component

// const {handleSubmit} = this.props; is es6 for const {handleSubmit} = this.props.handleSubmit;