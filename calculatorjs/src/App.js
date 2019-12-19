import React from 'react';
import './App.css';


function Keypad(props) {
    
  let contents = props.btnData.map(item => {
    return <button id={item.id} onClick={props.handleClick} value={item.value} className={item.classR}>{item.inner}</button>
    })
  return (
    <div id="keypad">

      {contents}
      
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
        this.btnData.map(item => {
          if (event.keyCode === item.key) {
            document.getElementById(item.id).click();
          }
        })
      }
    )
  }

  btnData = [

    {id: "clear",
    value: "clear",
    inner: "AC",
    classR: "#",
    key: 1000},
  
    {id: "divide",
    value: "/",
    inner: "/",
    classR: "operator",
    key: 111},
  
    {id: "multiply",
    value: "*",
    inner: "X",
    classR: "operator",
    key: 106},
  
    {id: "seven",
    value: "7",
    inner: "7",
    classR: "inte",
    key: 103},
  
    {id: "eight",
    value: "8",
    inner: "8",
    classR: "inte",
    key: 104},
  
    {id: "nine",
    value: "9",
    inner: "9",
    classR: "inte",
    key: 105},
  
    {id: "subtract",
    value: "-",
    inner: "-",
    classR: "inte",
    key: 109},
  
    {id: "four",
    value: "4",
    inner: "4",
    classR: "inte",
    key: 100},
  
    {id: "five",
    value: "5",
    inner: "5",
    classR: "inte",
    key: 101},
  
    {id: "six",
    value: "6",
    inner: "6",
    classR: "inte",
    key: 102},
  
    {id: "addition",
    value: "+",
    inner: "+",
    classR: "operator",
    key: 107},
  
    {id: "one",
    value: "1",
    inner: "1",
    classR: "inte",
    key: 97},
  
    {id: "two",
    value: "2",
    inner: "2",
    classR: "inte",
    key: 98},
  
    {id: "three",
    value: "3",
    inner: "3",
    classR: "inte",
    key: 99},
  
    {id: "equals",
    value: "=",
    inner: "=",
    classR: "#",
    key: 13},
  
    {id: "zero",
    value: "0",
    inner: "0",
    classR: "#",
    key: 96},
  
    {id: "decimal",
    value: ".",
    inner: ".",
    classR: "#",
    key: 110}] 

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
      <Keypad btnData={this.btnData} handleClick={this.handleClick}/>
    </div>
  );
  }
}

export default App;
