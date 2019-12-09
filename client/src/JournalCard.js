import React from 'react';
import {Link} from 'react-router-dom';
import './CSS/JournalCard.css';

function JournalCard(props) {
	return (
		<Link to={`/single-journal/${props.id}`}>
			<div className="JournalCard-wrapper">
				<div className="JournalCard-title-container">
					<p className="JournalCard-location">{props.location}</p>
					<p className="JournalCard-date">{props.date}</p>
				</div>
				<div className="JournalCard-image-wrapper">
					<img className="JournalCard-img" alt={`View of ${props.location}`} src={props.photoURL}/>
				</div>
				<p className="JournalCard-description">{props.description}</p>
			</div>
		</Link>
	);
}

export default JournalCard;

//Journal Cards are a Link component so that clicking on any part of the card will redirect the user to a view of that single journal entry