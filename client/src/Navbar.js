import React from 'react';
import { Link } from 'react-router-dom';

import './CSS/Nav.css';

function Navbar() {
	return (
		<div className="nav-container">
			{!window.location.href.includes('/home') ?
				<Link to="/home" className="navbar-action-item">Home</Link>
			: null}
			{window.location.href.includes('/single-journal') || window.location.href.includes('/all-journals') ?
				<Link to="/new-journal-entry" className="navbar-action-item">Add Entry</Link>
			: null}
			{window.location.href.includes('/single-journal') || window.location.href.includes('/new-journal-entry') ?
				<Link to="/all-journals" className="navbar-action-item">All Journals</Link>
			: null}
			{window.location.href.includes('/home') || window.location.href.includes('/login') ?
				<Link to="/register" className="navbar-action-item register-link">Register</Link>
			: null}
			{window.location.href.includes('/home') || window.location.href.includes('/register') ?
				<Link to="/login" className="navbar-action-item login-link">Login</Link>
			: null}
		</div>
	);
}

export default Navbar;