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
		//if data has not yet been returned from call to SQL database, render a loading message
		if (this.state.loading) {
			return <div>loading</div>;
		}
		//if data is finished loading, render journal card for each journal entry
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