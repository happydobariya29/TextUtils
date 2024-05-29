import React, { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import './App.css';
import About from "./components/About";
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from "./components/TextForm";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(()=>{
          setAlert(null);
        }, 1200);
  }

  const toggleMode = ()=>{
      if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#3f3f3ff5';
        showAlert("Dark mode has been enabled", "success");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success");
      }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About" mode = {mode} toggleMode={toggleMode}/>
    <Alert backgroundColor = '#bc5a5a' alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
          <About mode = {mode}/>
          </Route>
          <Route exact path="/">
          <TextForm heading="Enter the text to analyse below" mode = {mode} showAlert={showAlert}/>
          </Route>
    </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
