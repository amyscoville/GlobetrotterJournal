import React from 'react';
import { Redirect } from 'react-router';
import { Switch, Route } from 'react-router-dom';

//views
import Home from './Home';
import Login from './Login';
import Register from './Register';
import AllJournals from './AllJournals';
import SingleJournal from './SingleJournal';
import NewJournalEntry from './NewJournalEntry';

import './CSS/App.css';

class App extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="App">
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path='/all-journals' component={AllJournals} />
            <Route path='/single-journal/:id' component={SingleJournal} />
            <Route exact path='/new-journal-entry' component={NewJournalEntry} />
            <Redirect from="/" to="/home" />
        </Switch>
      </div>
    );
  }
}

export default App;
