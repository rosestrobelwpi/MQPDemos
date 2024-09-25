// const canvas = document.getElementById('canvas');
// const parser = document.getElementById('parser');
// const submitButton = document.getElementById('submit-button');
// const clearButton = document.getElementById('clear-button');
// const ctx = canvas.getContext('2d');

// canvas.width = canvas.parentElement.clientWidth;
// canvas.height = canvas.parentElement.clientHeight;


// function drawLine(x1, y1, x2, y2, color = 'black', lineWidth = 2) {
//     ctx.strokeStyle = color;
//     ctx.lineWidth = lineWidth;
//     ctx.beginPath();
//     ctx.moveTo(x1, y1);
//     ctx.lineTo(x2, y2);
//     ctx.stroke();
// }

// function parseAndDraw(input) {
//     const commands = input.split('\n'); //Splits each command by a new line
//     commands.forEach(command => { //For each command
//         const parts = command.trim().split(' '); //Removes spaces and then splits each command by a space
//         const shape = parts[0]; //The array that we put all of the split commands into
//         if (shape === 'line') {
//             const [x1, y1, x2, y2, r, g, b, lineWidth] = parts.slice(1).map(Number);
//             drawLine(x1, y1, x2, y2, 'black', lineWidth);
//         }
//         else {
//             alert('Invalid Command')
//         }
//     });
// }

// submitButton.addEventListener('click', function () {
//     const input = parser.value;
//     parseAndDraw(input);
// });

// clearButton.addEventListener('click', function() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
// });

import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

function App() {
    const [value, setValue] = React.useState("console.log('hello world!');");
    const onChange = React.useCallback((val, viewUpdate) => {
      console.log('val:', val);
      setValue(val);
    }, []);
    return <CodeMirror value={value} height="200px" extensions={[javascript({ jsx: true })]} onChange={onChange} />;
  }
  export default App;
  
    