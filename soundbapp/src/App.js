import React from 'react';
import './App.css';
import drum from './images/drum.png'
import smiley from './images/smiley.png'



function Display() {
  return (
    <div className="Display" id="display">
      <h2 id="inputstuff">BASS DRUM</h2>
      <div id="slider1">
      <label class="switch">
  <img src={drum} alt="drum" className="logo" height="30" width="30"/>
  <input type="checkbox" />
  <img src={smiley} alt="smiley" className="logo" height="30" width="30" />
      </label>
      </div>
    </div>
  );
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qPressed: false
    }
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.qClick = this.qClick.bind(this)
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
    document.addEventListener("keyup", this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (e.keyCode === 81)  {
    this.setState({
      qPressed: !this.state.qPressed
    })}
  }

  qClick() {
    this.setState ({
      qPressed: !this.state.qPressed
    })
  }

  render () {
  
  return (
    <div className="App" id="drum-machine" onKeyPress={this.handleKeyPress}>
      <div id="grid">
        <button className="drum-pad" id="#" onMouseUp={this.qClick} onMouseDown={this.qClick} style={{backgroundImage: this.state.qPressed ? "radial-gradient(circle closest-side, rgb(206, 206, 206), rgb(169, 245, 169))" : "radial-gradient(circle closest-side, rgb(206, 206, 206), #ededed)"}}>Q</button>
        <button className="drum-pad" id="#">W</button>
        <button className="drum-pad" id="#">E</button>
        <button className="drum-pad" id="#">A</button>
        <button className="drum-pad" id="#">S</button>
        <button className="drum-pad" id="#">D</button>
        <button className="drum-pad" id="#">Z</button>
        <button className="drum-pad" id="#">X</button>
        <button className="drum-pad" id="#">C</button>
      </div>
      <Display />
    </div>
  )
  }
}

export default App;
