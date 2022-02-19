import { useState } from 'react';
import './App.css';
import Home from './pages/Home'
import Locator from './pages/Locator'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/locator" element={<Locator />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>

      {/* <Home />
      <Locator />
      <Contact />
      <Register />
      <Login /> */}
    </div>
  );
}

export default App;
