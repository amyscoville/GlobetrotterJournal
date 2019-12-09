import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import axios from 'axios';
import Navbar from './Navbar';
import './CSS/Login.css';

class Login extends React.Component {

	constructor() {
		super();
		this.state = {
			redirect: false,
			inputs: {
				username: '',
				password: ''
			},
			invalidLogin: false
		}
		this.validateInputs = this.validateInputs.bind(this);
	}

	handleInputChange(e) {
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

	validateInputs() {
		//check that all inputs are not empty, return false if any are
		let keysArray = Object.keys(this.state.inputs);
		for (let i = 0; i < keysArray.length; i++) {
			if (this.state.inputs[keysArray[i]] === '') {
				return false;
			}
		}
		return true;
	}

	handleSubmit(e) {
		e.preventDefault();
		axios.post('/user/login', this.state.inputs)
			.then(response => {
				if (response.data.success) {
					this.setState({redirect: true});
				}
				else {
					//if login doesn't match records, display error message (in render method)
					this.setState({invalidLogin: true});
				}
			})
			.catch(err => {
				console.error(err);
            });
	}

	render() {
		let {username, password} = this.state.inputs;

		//if login was successful, user is redirected to the All Journals view
		if (this.state.redirect) {
			return <Redirect to="/all-journals"/>
		}
		return (
			<div className="login-container">
				<Navbar />
				<form onSubmit={this.handleSubmit.bind(this)} className="login-form">
					<input placeholder="Username" name="username" value={username} onChange={this.handleInputChange.bind(this)}></input>
					<input type="password" placeholder="Password" name="password" value={password} onChange={this.handleInputChange.bind(this)}></input>
					{this.state.invalidLogin ? <div className="invalid-password-message">Your username and/or password are invalid!</div> : null}
					<div className="login-actions-footer">
						<Link to="/register">Register</Link>
						<button type="submit" disabled={!this.validateInputs()} className="login-button">Login</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Login;