# Software Design

### Concept and User Experience

Prior to creating a plan for necessary components and desired folder structure, I used pen and paper to sketch out the various views for the site, indicating what type of element each part of the page would be, and which view the links would redirect to. This gave me a broad view of the components I would need to build and the functionality each component would need. 

### Folder Structure

After sketching out the site's views, I wrote out a basic folder structure to start with as a guide, knowing I would make changes to it along the way. Below is the original folder structure I wrote:

```
/client
    /app
        /navbar
        /landing page
        /register
        /login
        /new_journal
        /multi_view
            /journal_card
        /single_view
/db
    /users
        - username
        - email
        - password hash
    /journals
        - title
        - photo url
        - date
        - location
        - map
        - description
```

After writing the folder structure out, I implemented the front end and its components. I started with `create-react-app`, an npm package that creates a boilerplate for a React application, and removed all files and directories I didn't have need of. 

I knew I wanted to make a single page application with a navbar that remained constant while views changed below it. Initially, I thought it best to put the navbar outside of the views section, and have it stay while the views changed. However, a little way into my work, I realized that it would be difficult to adjust the contents of the navbar based on the current view without implementing a more complex state management system. Using redux or another higher level state management system seemed like overkill for such a small project, so I determined it would be best to move the navbar into each view, which would allow for re-rendering the navbar based on url updates.

After completing a basic front end application, I realized it would be nicer to create an API for talking to my SQL database, as opposed to making direct calls to the database from my front end code. I chose to use Express.js, as I had used it in a previous project and was somewhat familiar with its functionality. The implementation of Express required an additional directory of express routes.

There are `package.json` and `package-lock.json` files in the root (`final_project`) and  `client` directories for dependencies and scripts. There is also a `README.md` file in each directory. The `README.md` in the root is specific to this project, while the `README.md` in `client` was automatically populated with `create-react-app` and provides more information on dependencies and scripts in the app. 

### Dependencies

I have chosen to use a few dependencies to support this project. They include:

* Axios - I use axios for making calls from my React components to the Express API
* cors - This manages cross origin resource sharing and allows calls to be made between my front end and back end, which are coming from different url's.
* Express - As mentioned previously, express simplifies the creation of an API to help communicate between frontend components and the database
* nodemon - It was tedious to restart the server every time I made a change to the routes. Nodemon will hot reload when changes are made, which saved me a lot of time and annoyance.
* sqlite3 - With sqlite3, the database can be created and used from anywhere the repository has been pulled down and npm install has been run. This simplifies the repo sharing process.

### Technologies

I created this project using `JavaScript`, `ReactJS`, `CSS`, `Express`, and `SQL`. I chose to use JavaScript and React because I was more familiar with those languages and wanted to get more practice using them. I chose to use an SQL database because my first and only exposure to SQL was in CS50 and I wanted to become more proficient in it. 