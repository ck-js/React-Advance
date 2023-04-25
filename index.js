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

// conditional rendering

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

const App5 = (props) => {
  const [loading, setLoading] =
   useState(true);
   const [clicks, setClicks] =
   useState(0);

   useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
   }, []);

   if(loading) {
return <p>Loading Component...
  Please Wait
</p>
   }

   const addClicks = () => {
    setClicks(clicks +1)
   }

return (
  <div className="container">
    <h1>React Early Return Rendering</h1>
    <p>I have been clicked {clicks} times</p>
  <button
  value={clicks}
  onClick={addClicks}
  >+1</button>
  </div>
)
}
const App6 = (props) => {
  const [averageTemp, setAverageTemp] =
  useState(26);
  let prediction;

  if (props.currentTemp > averageTemp) {
prediction = "a little warmer than";
  } else if (props.currentTemp < averageTemp) {
prediction = "a little colder than";
  } else {
    prediction = "the same as";
  }
  
  return (
    <div className="container">
      <h2>Weather Predictor</h2>
<p>It will be {prediction} expected </p>      
    </div>
  )
}

const App7 = (props) => {
  const [loggedIn, setLoggedIn] =
  useState(false);
  const [username, setUsername] =
  useState(null);

  

  if (!loggedIn) {
return <p>You are not logged in,
  log in first
</p>
  }

  return (
    <div className="container">
      <h3>Welcome {username}</h3>

    </div>
  )
} 

const App8 = (props) => {
const [open, setOpen] = useState(false);
const [itemCount, setItemCount] = 
useState(23);
let sign;


if (!open) {
sign = <p>Sorry, we are closed today</p>
}   else if (itemCount === 0) {
  sign = <p>This item is out of stock</p>
} else {
  sign = <p>We have {itemCount} of that item</p>
}

return (
  <div className="container">
    <h1>Shopify</h1>
    <p>
      <i>
        <u>Item:</u>Choco Cookies
      </i>
    </p>
  {sign}
  </div>
)
}

// early return component example

const App9 = (props) => {
if (props.src === null) {
  return <p>No image available</p>
}
return <img src={props.src} /> 
}

// ternary operators && 

const App10 = () => {
  let number = 28;

  const print = (number % 2 == 1)
  ? "This is an odd number"
  : "This is an even number"

  return <p className="container">{number} {print}</p>
}

const App11 = (props) => {
  const number = props.number;

  return (
    <div className="container">
      <h3>{number}</h3>
      {
        (number % 2 == 1)
        ? <p>This is an odd number</p>
        : <p>This is an even number</p>
      }
    </div>
  )
}

ReactDOM.render(
<App11
number=""

/>,
document.getElementById("root")
)