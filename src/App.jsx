import { useState } from 'react';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router } from "react-router-dom";
import AllRoute from './Components/AllRoute.jsx';

function App() {
  

  return (
    <Router>
      <Navbar />
      <AllRoute/>

    </Router>
  );
}

export default App

