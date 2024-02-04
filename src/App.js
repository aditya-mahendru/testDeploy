// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CelebrationPage from './components/CelebrationPage';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/celebration" element={<CelebrationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
