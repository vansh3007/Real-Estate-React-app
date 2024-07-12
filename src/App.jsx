import { useState } from 'react';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router } from "react-router-dom";
import AllRoute from './Components/AllRoute.jsx';
import { Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
      <Navbar />
      <AllRoute />
    </>
  );
}

export default App

