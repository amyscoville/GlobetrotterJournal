import React from 'react';
import axios from 'axios';

import JournalCard from './JournalCard';
import Navbar from './Navbar';

import './CSS/AllJournals.css';

class AllJournals extends React.Component {
	constructor() {
		super();
		this.state = {
			journals: [],
			loading: true
		};
		this.getJournals = this.getJournals.bind(this);
	}

	componentDidMount() {
		this.getJournals();
	}

	getJournals() {
		axios.get('/journals/all-journals')
			.then((response) => {
				this.setState({
					journals: response.data.journalEntries,
					loading: false
				});
			})
			.catch(err => {
                console.error(err);
            });
	}

	render() {
		if (this.state.loagin) {
			return <div>loading</div>;
		}
		return (
			<div className="AllJournals-wrapper">
				<Navbar />
				<div className="AllJournals-cards-container">
					{this.state.journals.map((journal, index) => <JournalCard {...journal} key={`${journal.location}${index}`}/>)}
				</div>
			</div>
		);
	}
}

export default AllJournals;