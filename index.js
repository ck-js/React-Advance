import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const App1 = () => {
  return (
    <div className="container">
      <h1>React Advanced Test</h1>
    </div>
  )
}

const App2 = () => {
  const number = 99;

  let response;
  if (number % 2 == 1) {
    response = "odd";
  } else {
    response = "even";
  }

  return (
    <div className="container">
      <h1>Even Odd Detector</h1>
      <p>The number {number} is an {response}
       number</p>
    </div>
  )
}



ReactDOM.render(
<App2
/>,
document.getElementById("root")
)