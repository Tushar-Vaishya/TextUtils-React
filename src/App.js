import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
//import About from './components/About';
import React, { useState } from 'react'

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   //Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //Check whether the dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  
  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null);
    },1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  

  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About us"/> */}
    {/* <Navbar/> */}
    
    

    {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        {/* <Routes> */}
        {/* <Route exact path="/about" element={<About />}>
            </Route> */}
            {/* <Route exact path="/" element={<Textform heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}> */}
            {/* </Route>
        </Routes> */}
        <Textform heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
        </div>
    {/* </Router> */}
    
    </>
  );
}

export default App;
