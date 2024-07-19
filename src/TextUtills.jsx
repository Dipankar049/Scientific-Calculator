import React from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Theme from "./components/theme";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import About from "./components/About";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

export default function TextUtills() {
  const [alertMsg, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Router>
        {/* <Navbar title="TextUtills" /> */}
        <Alert alert={alertMsg} />
        <Routes>
          <Route exact path="/about"
          element={<About />}
          ></Route>
          <Route exact path="/"
              element={<div className="container my-3">
                <TextForm showAlert={showAlert} heading="Enter text to modify" />
                </div>}  
            ></Route>
        </Routes>
        
      </Router>
    </>
  );
}
// ajabbc
