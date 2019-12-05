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

    }
  }
  render () {
  return (
    <div className="App" id="drum-machine">
      <div id="grid">
        <button className="drum-pad" id="#">Q</button>
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
