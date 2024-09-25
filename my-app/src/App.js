import React from "react";
import "./App.css";
import {Link} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Play from './Play'

function App() {
  return (
    <div className="container">
      <h1>Quilt Designer</h1>
      <div className="btn-container">
        <div className="top-btns">
        <button>Play</button>
          <button>Tutorial</button>
        </div>
        <div className="bottom-btn">
          <button>About Us</button>
        </div>
      </div>
    </div>
  );
}

export default App;
