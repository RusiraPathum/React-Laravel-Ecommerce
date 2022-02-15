import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import MasterLayout from './layouts/admin/MasterLatout';
import Home from './components/frontend/Home';
import Login from './components/frontend/auth/Login';
import Register from './components/frontend/auth/Register';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.baseURL = "http://127.0.0.1:8000/";

axios.defaults.withCredentials = true;
axios.interceptors.request.use(function(config){
  const token = localStorage.getItem('auth_token');

  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
  
})

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path='/' component= {Home} />

          <Route path='/login' component= {Login} />

          <Route path='/register' component= {Register} />

          <Route path='/admin' name='Admin' render={(props) => <MasterLayout {...props} />} />

          {/* <Route path='/admin/dashboard' component={Dashboard} /> */}
          {/* <Route path='/admin/profile' component={Profile} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
