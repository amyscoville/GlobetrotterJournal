import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './CSS/SingleJournal.css';

class SingleJournal extends React.Component {
	constructor() {
		super();
		this.state = {
			loading: true
		};
	}

	componentDidMount() {
		const {id} = this.props.match.params;
		axios.get(`/journals/${id}`)
			.then(response => {
				this.setState({
					...response.data,
					loading: false
				});
			})
	}

	render() {
		if (this.state.loading) {
			return <div>LOADING</div>;
		}
		return (
			<div className="SingleJournal-wrapper">
				<Navbar />
				<div className="SingleJournal-content">
					<div className="SingleJournal-title-container">
						<p className="SingleJournal-title">{this.state.location}</p>
						<p className="SingleJournal-date">{this.state.date}</p>
					</div>
					<div className="SingleJournal-image-wrapper">
						<img className="SingleJournal-img" alt={`View of ${this.state.location}`} src={this.state.photoURL}/>
					</div>
					<p className="SingleJournal-description">{this.state.description}</p>
				</div>
			</div>
		);
	}
}

export default SingleJournal;