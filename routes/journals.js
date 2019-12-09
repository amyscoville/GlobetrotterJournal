const express = require('express');
const journalsRoute = express.Router();

//retrieve array of all journal entries
journalsRoute.route('/all-journals')
    .get((req, res) => {
		req.db.all(`SELECT location, date, photoURL, description, id FROM journals`, (err, rows) => {
			return res.send({journalEntries: rows});
		});
    });

//retrieve a single journal entry by ID
journalsRoute.route('/:id')
    .get((req, res) => {
		req.db.get(`SELECT location, date, photoURL, description, id FROM journals WHERE id = '${req.params.id}'`, (err, row) => {
			return res.send({...row});
		});
	});


//add a single journal entry to journals table	
journalsRoute.route('/new-entry')
	.post((req, res) => {
		let {location, date, photoURL, description, id} = req.body;
		return res.send(req.db.exec(`INSERT INTO journals VALUES ("${location}", "${date}", "${photoURL}", "${description}", "${id}")`));
	});

module.exports = journalsRoute;
