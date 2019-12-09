import React from 'react';
import { Switch, Route } from 'react-router-dom';

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

  componentDidMount(){
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
            <Route path='/new-journal-entry' component={NewJournalEntry} />
        </Switch>
      </div>
    );
  }
}

export default App;
