import React from 'react';
import Login from './components/Login.js';
import Auth from './components/Auth.js';
import './App.css';
import Write from "./components/Write";
import Main from "./components/Main";
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact={true} component={Login} />
        <Route path="/oauth/kakao/callback" component={Auth} />
        <Route path="/" component={<Main />} />
        <Route path="/write" component={<Write />} />
      </Router>
    </div>
  );
}

export default App;
