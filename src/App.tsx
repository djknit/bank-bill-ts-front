import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage';
import MainApp from './MainApp';
import { userInfo } from 'os';


function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/app" Component={MainApp} />
          <Route path="*" Component={LandingPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
