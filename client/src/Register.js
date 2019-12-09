import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import axios from 'axios';
import Navbar from './Navbar';

import './CSS/Register.css';

class Register extends React.Component {;
	constructor() {
		super();
		this.state = {
			inputs: {
				username: '',
				email: '',
				password: '',
				confirmPassword: ''
			},
			redirect: false
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.validateInputs = this.validateInputs.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(e) {
		let { name, value } = e.target;
		this.setState(prevState => {
			return {
				inputs: {
					...prevState.inputs,
					[name]: value
				}
			}
		});
	}

	validateInputs() {
		//check that all inputs are not empty, return false if any are
		let keysArray = Object.keys(this.state.inputs);
		for (let i = 0; i < keysArray.length; i++) {
			if (this.state.inputs[keysArray[i]] === '') {
				return false;
			}
		}
		//check that passwords match, return false i not
		if (this.state.inputs.password !== this.state.inputs.confirmPassword) {
			return false;
		}
		return true;
	}

	handleSubmit(e) {
		e.preventDefault();
		axios.post('user/register', this.state.inputs)
			.then(response => {
				this.setState({redirect: true});
			})
			.catch(err => {
				console.error(err);
			});
	}

	render() {
		if (this.state.redirect) {
			return <Redirect to="/all-journals"/>;
		}
		return (
			<div className="register-container">
				<Navbar />
				<form onSubmit={this.handleSubmit} className="registration-form">
					<input type="text" placeholder="E-mail address" name="email" value={this.state.inputs.email} onChange={this.handleInputChange}></input>
					<input type="text" placeholder="Username" name="username" value={this.state.inputs.username} onChange={this.handleInputChange}></input>
					<input type="password" placeholder="Password" name="password" value={this.state.inputs.password} onChange={this.handleInputChange}></input>
					<input type="password" placeholder="Confirm Password" name="confirmPassword" value={this.state.inputs.confirmPassword} onChange={this.handleInputChange}></input>
					<div className="registration-footer">
						<Link to="/login" className="registration-action-items">Login</Link>
						<button disabled={!this.validateInputs()} type="submit" className="registration-action-items register-button">Register</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Register;