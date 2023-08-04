import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';
import { useState } from 'react'; 
import React from 'react'
import Alert from './components/Alert';
import { Router } from 'react-router-dom';

function App() {
  const [mode,setmode]=useState('light')
  const[alert, setalert]=useState(null)
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
     })
     setTimeout(()=>{
       setalert(null)
     },2000)
  } 
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark')
      showalert("Dark mode has been enabled","success")
      document.body.style.backgroundColor='#211746'
      document.title="Text-Utils Dark Mode"
    }
    else if (mode==='dark'){
      setmode('light')
      showalert("Light mode has been enabled","success")
      document.body.style.backgroundColor='white'
      document.title="Text-Utils Light Mode"
      
    }
  }
  return (
    <>

    <Navbar title="Text Utils" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    {/* <Router/> */}
    <div className="container">
    <TextForm heading="Enter The Text To Analyze" mode={mode} showalert={showalert}/>
  </div>

    {/* <About/> */}
    </>
  );
}   

export default App;
     