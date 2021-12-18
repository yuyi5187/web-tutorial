import React from 'react';
import Login from './components/Login.js';
import Auth from './components/Auth.js';
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact={true} component={Login} />
        <Route path="/oauth/kakao/callback" component={Auth} />
      </Router>
    </div>
  );
}

export default App;
