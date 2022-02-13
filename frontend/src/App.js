import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import MasterLayout from './layouts/admin/MasterLatout';
import Home from './components/frontend/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path='/' component= {Home} />

          <Route path='/admin' name='Admin' render={(props) => <MasterLayout {...props} />} />

          {/* <Route path='/admin/dashboard' component={Dashboard} /> */}
          {/* <Route path='/admin/profile' component={Profile} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
