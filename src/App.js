
import React from 'react';
import './App.css';
import Login from './login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tempapp from './component/temp';
import Jokess from './jokes/Jokes';


function App() {
  return (
   <BrowserRouter>
       <Routes>
        <Route path='/' element ={<Login />} /> 
        <Route path='Tempapp' element ={< Tempapp />} /> 
        <Route path='jokess' element ={<Jokess/>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;

