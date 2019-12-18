import React from 'react';
import './App.css';

function Keypad(props) {
  return (
    <div id="keypad">
      <button id="clear" onClick={props.handleClick} value="clear">AC</button>
      <button id="divide" onClick={props.handleClick} value="/" className="operator">/</button>
      <button id="multiply" onClick={props.handleClick} value="*" className="operator">X</button>
      <button id="seven" onClick={props.handleClick} value="7" className="inte">7</button>
      <button id="eight" onClick={props.handleClick} value="8" className="inte">8</button>
      <button id="nine" onClick={props.handleClick} value="9" className="inte">9</button>
      <button id="subtract" onClick={props.handleClick} value="-" className="operator">-</button>
      <button id="four" onClick={props.handleClick} value="4" className="inte">4</button>
      <button id="five" onClick={props.handleClick} value="5" className="inte">5</button>
      <button id="six" onClick={props.handleClick} value="6" className="inte">6</button>
      <button id="addition" onClick={props.handleClick} value="+" className="operator">+</button>
      <button id="one" onClick={props.handleClick} value="1" className="inte">1</button>
      <button id="two" onClick={props.handleClick} value="2" className="inte">2</button>
      <button id="three" onClick={props.handleClick} value="3" className="inte">3</button>
      <button id="equals" onClick={props.handleClick} value="=">=</button>
      <button id="zero" onClick={props.handleClick} value="0">0</button>
      <button id="decimal" onClick={props.handleClick} value=".">.</button>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upDisplay: "",
      downDisplay: "0",
      hasDec: false,
      carryForward: false
    }
  this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount = () => {
    document
    .addEventListener("keydown", event => 
      { 
        if (event.keyCode === 111) 
    {document.getElementById("divide").click();}
        if (event.keyCode === 106) 
    {document.getElementById("multiply").click();}
        if (event.keyCode === 109) 
    {document.getElementById("subtract").click();}
        if (event.keyCode === 103) 
    {document.getElementById("seven").click();}
        if (event.keyCode === 104) 
    {document.getElementById("eight").click();}
        if (event.keyCode === 105) 
    {document.getElementById("nine").click();}
        if (event.keyCode === 107) 
    {document.getElementById("addition").click();}
        if (event.keyCode === 110) 
    {document.getElementById("decimal").click();}
        if (event.keyCode === 100) 
    {document.getElementById("four").click();}
        if (event.keyCode === 101) 
    {document.getElementById("five").click();}
        if (event.keyCode === 102) 
    {document.getElementById("six").click();}
        if (event.keyCode === 97) 
    {document.getElementById("one").click();}
        if (event.keyCode === 98) 
    {document.getElementById("two").click();}
        if (event.keyCode === 99) 
    {document.getElementById("three").click();}
        if (event.keyCode === 96) 
    {document.getElementById("zero").click();}
        if (event.keyCode === 13) 
    {document.getElementById("equals").click();}
      }
    )
  }

  handleClick = (event) => 
  { if (event.target.value === "clear") {
    this.setState({
    upDisplay: "",
    downDisplay: "0",
    carryForward: false,
    hasDec: false
    })
    }
    if (event.target.value === "=" && this.state.carryForward === false) {
    this.setState({
    downDisplay: eval(this.state.upDisplay).toString(),
    upDisplay: this.state.upDisplay.concat("="+(eval(this.state.upDisplay).toString())),
    carryForward: true,
    hasDec: false
    })
    }
    if ((event.target.value === "." && this.state.hasDec === false) || (event.target.value === "." && isNaN(this.state.downDisplay))) {
      this.setState({
          upDisplay: this.state.upDisplay.concat("0."),
          downDisplay: this.state.downDisplay.concat("."),
          hasDec: true
          })
    }
    if (!isNaN(this.state.downDisplay) && this.state.carryForward === false) {
      if (this.state.downDisplay === "0") {
        if (this.state.upDisplay === "" && event.target.value === "0")
          {
          this.setState({
            upDisplay: this.state.upDisplay.concat("0")
            })
          }
        if (event.target.value === ".") 
          {
          this.setState({
            upDisplay: this.state.upDisplay.concat("."),
            downDisplay: this.state.downDisplay.concat("."),
            hasDec: true
            })
          }
        if (event.target.className === "inte") 
          {
          this.setState({
            upDisplay: event.target.value,
            downDisplay: event.target.value
          })
          }
        if (event.target.value === "-")
          {
          this.setState({
            upDisplay: "-",
            downDisplay: "-"
          })
          }          
      }
      else {
        if (event.target.className === "inte" || event.target.value === "0") 
          {
          this.setState({
            upDisplay: this.state.upDisplay.concat(event.target.value),
            downDisplay: this.state.downDisplay.concat(event.target.value)
          })
        }
        if (event.target.className === "operator") {
          this.setState({
            upDisplay: this.state.upDisplay.concat(event.target.value),
            downDisplay: event.target.value
          })
        }
        if (event.target.value === "." && this.state.hasDec === false) {
          this.setState({
            upDisplay: this.state.upDisplay.concat(event.target.value),
            downDisplay: this.state.downDisplay.concat(event.target.value),
            hasDec: true
          })
        } 
      }            
    }
    else if ((!isNaN(this.state.downDisplay)) && this.state.carryForward === true) {
      if (event.target.className === "operator" || event.target.value === "-") {
        this.setState({
          upDisplay: this.state.downDisplay.concat(event.target.value),
          downDisplay: event.target.value,
          carryForward: false
        })
      }
      else if (event.target.value === "=") {
        this.setState({
          upDisplay: this.state.downDisplay,
          downDisplay: this.state.downDisplay
        })
      }
      else {
        this.setState({
          upDisplay: "",
          downDisplay: "0",
          carryForward: false
        })
      }
    }
    else {
      if (event.target.value !== "-" && event.target.className === "operator") {
        this.setState({
          upDisplay: this.state.upDisplay.replace(/.$/g, event.target.value),
          downDisplay: event.target.value,
          hasDec: false
        })
      }
      if (event.target.value === "-" && this.state.downDisplay.length === 1) {
        this.setState({
          upDisplay: this.state.upDisplay.concat(event.target.value),
          downDisplay: this.state.downDisplay.concat(event.target.value),
          hasDec: false
        })
      }
      if (event.target.value !== "-" && this.state.downDisplay.length === 2) {
        this.setState({
        upDisplay: this.state.upDisplay.replace(/..$/g, event.target.value),
        downDisplay: event.target.value,
        hasDec: false
        })
        }
      if (event.target.className === "inte" || event.target.value === "0") {
        this.setState({
          upDisplay: this.state.upDisplay.concat(event.target.value),
          downDisplay: event.target.value,
          hasDec: false
        })
      }
    }            
  }        
  render() {
  return (
    <div id="calc">
      <div id="display">
        <div id="dis-up">{this.state.upDisplay}</div>
        <div id="dis-down">{this.state.downDisplay}</div>
      </div>
      <Keypad handleClick={this.handleClick}/>
    </div>
  );
  }
}

export default App;