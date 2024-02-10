// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Components/signUp';
import SignIn from './Components/signIn';
import './style.css'
import UserProfile from './Components/UserProfile';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/" element={<SignUp />} /> 
          <Route path="/user" element={<UserProfile/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


