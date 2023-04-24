import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TextInput from "./elements.js"



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

const App3 = () => {
  const [number, setNumber] = useState(420);

  const handleNumber = (event) => {
    setNumber(event.target.value)
  }
let response;
if (number % 2 == 1) {
response = "odd";
}else {
  response = "even";
}

return (
  <div className="container">
    <h1>Even Odd Detector v2</h1>
    <input className="number"
    type="number"
    value={number}
    onChange={handleNumber}
    /> 
    <p>The number {number} is an {response}
    number</p>
  </div>
)
}

class App4 extends React.Component {
  constructor() {
    super();
    this.state = {
      entry: "",
      error: "This must not be empty"
    }
  }

  updateInput = (event) => {
    let error = null;
    if (event.target.value.length == 0) {
      error = "This must not be empty"
    }

    this.setState({
      entry: event.target.value,
      error: error,
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Travel GO Application Form</h1>
        <TextInput 
        value={this.state.entry}
        onChange={this.updateInput}
        error={this.state.error}
        />
      </div>
    )
  }
}



ReactDOM.render(
<App4
/>,
document.getElementById("root")
)