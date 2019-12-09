const express = require('express');
const cors = require("cors");
const userRoutes = require('./routes/user');
const journalsRoutes = require('./routes/journals');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

//create new sqlite database, open connection
const db = new sqlite3.Database(':memory:', () => {
    //serialize requires each function to complete before starting the next
    db.serialize(() => {
        //create users and journals tables
        db.exec("CREATE TABLE users (username TEXT, email TEXT, password TEXT)");
        db.exec("CREATE TABLE journals (location TEXT, date TEXT, photoURL TEXT, description TEXT, id TEXT) ");
        //add journal entries for display purposes
        db.exec(`INSERT INTO journals VALUES ('Toledo, Spain', 'June 2004', 'https://img.theculturetrip.com/768x432/wp-content/uploads/2018/10/fxjybk.jpg', 'Study Abroad', 'spain')`);
        db.exec(`INSERT INTO journals VALUES ('Cancun', 'Dec 2015', 'https://cdn.travelpulse.com/images/99999999-9999-9999-9999-999999999999/42c9d71d-0a9d-c6a3-bf2d-e485fa153bb8/630x355.jpg', 'PARTAY', 'Cancun')`);
    });
});

//configure Express app
app.use(express.static('./routes'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/journals', (req, res, next) => {
    req.db = db;
    next();
}, journalsRoutes);
app.use('/user', (req, res, next) => {
    req.db = db;
    next();
}, userRoutes);

//set up port
app.listen(7777, () => {
    console.log('Listening on port 7777');
});