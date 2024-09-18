import React, { useState, useRef } from "react";
import "./App.css";

function Play() {
  const [textareaValue, setTextareaValue] = useState("");
  const canvasRef = useRef(null);

  // Event handler for Submit button
  const handleSubmit = () => {
    console.log("Submitted:", textareaValue);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    // Example: Draw something on the canvas
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(10, 10, 100, 100);
  };

  // Event handler for Clear button
  const handleClear = () => {
    setTextareaValue("");
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Quilt NEOW</h1>
      </div>
      <div className="parser-container">
        <textarea
          name="parser"
          id="parser"
          value={textareaValue}
          onChange={(e) => setTextareaValue(e.target.value)}
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

export default Play;
