import React from 'react';
import './CSS/Home.css';
import Navbar from './Navbar';

function Home(props) {
	return (
		<div className="Home-container">
			<Navbar />
			<div className="Home-body">
				<div className="logo">Globetrotter</div>
			</div>
		</div>
	);
}

export default Home;