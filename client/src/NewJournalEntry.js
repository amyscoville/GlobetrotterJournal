import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

import Navbar from './Navbar';
import './CSS/NewJournalEntry.css';
const uuid = require('uuid/v4');

class NewJournalEntry extends React.Component {
	constructor() {
		super();
		this.state = {
			inputs: {
				location: '',
				date: '',
				photoURL: '',
				description: ''
			},
			redirect: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		let {name, value} = e.target;
		this.setState(prevState => {
			return {
				inputs: {
					...prevState.inputs,
					[name]: value
				}
			}
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		//send the input values in with a new, random ID for the journal entry
		axios.post('/journals/new-entry', {...this.state.inputs, id: uuid()})
			.then((response) => {
				this.setState({
					redirect: true
				});
			})
			.catch(err => {
                console.error(err);
            });
	}

	render() {
		//if new entry has been successfully submitted, redirect to the All Journals view
		if (this.state.redirect) {
			return <Redirect to="/all-journals"/>;
		}
			
		return (
			<div className="NewJournalEntry-wrapper">
				<Navbar />
				<form onSubmit={this.handleSubmit} className="NewJournalEntry-form">
					<input type="text" placeholder="Location" label="Location" name="location" value={this.state.inputs.location} onChange={this.handleChange}/>
					<input type="text" placeholder="Date (Month Year)" label="Date" name="date" value={this.state.inputs.date} onChange={this.handleChange}/>
					<input type="text" placeholder="Photo URL" label="Photo URL" name="photoURL" value={this.state.inputs.photoURL} onChange={this.handleChange}/>
					<input type="text" placeholder="Description" label="Description" name="description" value={this.state.inputs.description} onChange={this.handleChange}/>
					<button type="submit" className="NewJournalEntry-submit">Submit</button>
				</form>
			</div>
			
		);
	}
}

export default NewJournalEntry;