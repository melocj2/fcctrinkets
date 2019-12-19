import React from 'react';
import './App.css';


function Keypad(props) {
  let btnData = [

    {id: "clear",
    value: "clear",
    inner: "AC",
    classR: "#"},
  
    {id: "divide",
    value: "/",
    inner: "/",
    classR: "operator"},
  
    {id: "multiply",
    value: "*",
    inner: "X",
    classR: "operator"},
  
    {id: "seven",
    value: "7",
    inner: "7",
    classR: "inte"},
  
    {id: "eight",
    value: "8",
    inner: "8",
    classR: "inte"},
  
    {id: "nine",
    value: "9",
    inner: "9",
    classR: "inte"},
  
    {id: "subtract",
    value: "-",
    inner: "-",
    classR: "inte"},
  
    {id: "four",
    value: "4",
    inner: "4",
    classR: "inte"},
  
    {id: "five",
    value: "5",
    inner: "5",
    classR: "inte"},
  
    {id: "six",
    value: "6",
    inner: "6",
    classR: "inte"},
  
    {id: "addition",
    value: "+",
    inner: "+",
    classR: "operator"},
  
    {id: "one",
    value: "1",
    inner: "1",
    classR: "inte"},
  
    {id: "two",
    value: "2",
    inner: "2",
    classR: "inte"},
  
    {id: "three",
    value: "3",
    inner: "3",
    classR: "inte"},
  
    {id: "equals",
    value: "=",
    inner: "=",
    classR: "#"},
  
    {id: "zero",
    value: "0",
    inner: "0",
    classR: "#"},
  
    {id: "decimal",
    value: ".",
    inner: ".",
    classR: "#"}] 
  
  let contents = btnData.map(item => {
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
