const express = require('express');
const userRoutes = express.Router();

userRoutes.route("/register")
    .post((req, res) => {
		let {username, email, password} = req.body;
		return res.send(req.db.exec(`INSERT INTO users (username, email, password) VALUES ("${username}", "${email}", "${password}")`));
    })

userRoutes.route("/login")
    .post((req, res) => {
		let {username, password} = req.body;
		let {db} = req;
		db.get(`SELECT username FROM users WHERE username = "${username}" AND password = "${password}"`, (err, row) => {
			if (row === undefined) {
				return res.send({success: false, error: err});
			}
			return res.send({success: true}); 
		});
    });

module.exports = userRoutes;