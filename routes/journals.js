const express = require('express');
const journalsRoute = express.Router();

journalsRoute.route('/all-journals')
    .get((req, res) => {
		req.db.all(`SELECT location, date, photoURL, description, id FROM journals`, (err, rows) => {
			return res.send({journalEntries: rows});
		});
    });

journalsRoute.route('/:id')
    .get((req, res) => {
		req.db.get(`SELECT location, date, photoURL, description, id FROM journals WHERE id = '${req.params.id}'`, (err, row) => {
			return res.send({...row});
		});
	});


//ADD JOURNAL ENTRY TO TABLE OF ENTRIES	
journalsRoute.route('/new-entry')
	.post((req, res) => {
		let {location, date, photoURL, description, id} = req.body;
		return res.send(req.db.exec(`INSERT INTO journals VALUES ("${location}", "${date}", "${photoURL}", "${description}", "${id}")`));
	});

module.exports = journalsRoute;
