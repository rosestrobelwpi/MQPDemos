import React, { useState, useRef } from "react";
import "./App.css"
import {UnControlled as CodeMirror} from 'react-codemirror2'
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript";


function App() {
  const [textareaValue, setTextareaValue] = useState("");
  const canvasRef = useRef(null);


  const handleSubmit = () => {
    console.log("Submitted:", textareaValue);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
  };


  const handleClear = () => {
    setTextareaValue("");
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Quilt NEOW</h1>
      </div>
      <div className="parser-container">
      <CodeMirror
        value=''
        options={{
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true
        }}
        onChange={(editor, data, value) => {
            }}
          />
        <div className="button-container">
          <button id="submit-button" onClick={handleSubmit}>
            Submit
          </button>
          <button id="clear-button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
      <div className="drawing-container">
        <canvas id="canvas" ref={canvasRef}></canvas>
      </div>
    </div>
  );
}

export default App;
