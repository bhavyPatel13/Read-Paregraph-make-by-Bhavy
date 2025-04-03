import './App.css';
import React, { useState } from 'react';
import About1 from './components/About/About1';
import Alert1 from './components/Alert/Alert1';
import Alert2 from './components/Alert/Alert2';
import Navbar from './components/navbar';
import Textformlowwercase from './components/State and handling event/Textformlowwercase';
import Textformuppercase from './components/State and handling event/Textformuppercase';

export default function App() {
  const [mode, setMode] = useState("light");
  const [Alert, setAlert] = useState(null);
  const [bhavy, setBhavy] = useState(null);

  const showBhavyAlert = (Type, Message) => {
    setBhavy({
      type : Type,
      message : Message
    });
    setTimeout(() => {
      setBhavy(null);
    }, 3000);
  }

  const showAlert = (type, message) => {
    setAlert({
      type : type,
      message : message
    })
    setTimeout(() => {
      setAlert(null);
    },2000);
  }
  const removeBodyColor = () => {
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
  }
  const toggler = (color) => {
    removeBodyColor();
    document.body.classList.add("bg-"+color);
    // if (mode === "light") {
    //   setMode("dark");
    //   document.body.style.backgroundColor ="#042743";
    //   showAlert("success", "enable darkmode successfully");
    //   showBhavyAlert("Success => 2", "Disable light mode successfully");
    // } else {
    //   setMode("light");
    //   document.body.style.backgroundColor = "white";
    //   showAlert("success", "enabe lightmode successfully");
    //   showBhavyAlert("Success => 2", "Disable dark mode successfully");
    // }
    if(color === "#042743"){
       setMode(
        document.body.style.backgroundColor = "#042743"
       )
    }
  }

  return (
    <>
      <Navbar title="Bhavy" About="aboutApp" mode1={mode} toggle={toggler} showAlert01={showAlert}/>
      <Alert1 alert={Alert}/>
      <Alert2 bhavyAlert={bhavy}/>
      <Textformlowwercase heading="Write some" mode1={mode} showAlert01={showAlert} showAlert02={showBhavyAlert}/>
      <Textformuppercase heading="Write some word" mode1={mode} showAlert01={showAlert} showAlert02={showBhavyAlert}/>
      <About1 showAlert01={showAlert} showAlert02={showBhavyAlert}/>
    </>
  );
}