# Globetrotter

### Introduction

Globetrotter is an online travel journaling platform where users can store short entries about the places they've visited. Entries include the location, date, a photo, and a short description. Users are required to register prior to using the site.


### Getting Started

Steps to see this software in a browser:

* Clone or download the `final_project` repository from github to your machine
* Open terminal and change directories to `final_project`
* Install dependencies in `final_project` folder by running `npm install` in the command line 
* Run `nodemon` from the `final_project` directory to start the backend server. (`nodemon` is an npm package that hot-reloads the server when changes are made)
* In a second terminal window, change directories into `client` by running `cd client` in the command line
* Install dependencies in `client` by running `npm install` in the command line
* Run `npm start` to serve the client-side code
* Go to [http://localhost:3000/home](http://localhost:3000/home) to see the code in the browser


### Usage

* From the [homepage](http://localhost:3000/home), click on "Register" and complete the registration form. The button to submit the form will be disabled until all fields have been completed, and the password and confirmation are an exact match.
* Upon registration, users will be redirected to the "All Journals" page, which displays all journal entries submitted. For demonstration purposes, I have included two entries in the database that will display when the page loads
* Click "Add Entry" in the navbar on the upper right and complete the form to submit a new journal entry 
	- _Note that in the current iteration of this project, photos cannot be uploaded directly from the user's machine. A URL for the image must be provided in order to display a photo._
* Authentication in this iteration of the project is rudimentary. There is not currently a way to log out. To test the functionality of Login, simply return to the [homepage](http://localhost:3000/home) after registering and click "Login" in the navbar at the top right of the screen. Enter the username and password previously registered. Upon successful login, users will be redirected to the All Journals page.
