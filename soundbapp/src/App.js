import React from 'react';
import './App.css';
import drum from './images/drum.png'
import smiley from './images/smiley.png'
import freeReal from './sounds/freerealestate.mp3'
import keepYourS from './sounds/keepYourS.mp3'

function Display(props) {
  return (
    <div className="Display" id="display">
      <h2 id="inputstuff">BASS DRUM</h2>
      <div id="slider1">
      <label class="switch">
  <img src={drum} alt="drum" className="logo" height="30" width="30"/>
  <input type="checkbox" onChange={props.toggleBoard}/>
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
      qPressed: false,
      board: true
    }
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.qClick = this.qClick.bind(this)
    this.toggleBoard = this.toggleBoard.bind(this)
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
    
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

  toggleBoard() {
    this.setState ({
      board: !this.state.board
    })
  }

  render () {
  
  return (
    <div className="App" id="drum-machine" onKeyPress={this.handleKeyPress}>
      <div id="grid">
        <button className="drum-pad" id="#" onMouseDown={this.qClick} style={{backgroundImage: this.state.qPressed ? "radial-gradient(circle closest-side, rgb(206, 206, 206), rgb(169, 245, 169))" : "radial-gradient(circle closest-side, rgb(206, 206, 206), #ededed)"}}>Q</button>
        {this.state.qPressed && this.state.board && <audio ref="audio_tag" src={freeReal} autoPlay onEnded={this.qClick}/>}
        {this.state.qPressed && !this.state.board && <audio ref="audio_tag" src={keepYourS} autoPlay onEnded={this.qClick}/>}
        <button className="drum-pad" id="#">W</button>

        <button className="drum-pad" id="#">E</button>
        <button className="drum-pad" id="#">A</button>
        <button className="drum-pad" id="#">S</button>
        <button className="drum-pad" id="#">D</button>
        <button className="drum-pad" id="#">Z</button>
        <button className="drum-pad" id="#">X</button>
        <button className="drum-pad" id="#">C</button>
      </div>
      <Display toggleBoard={this.toggleBoard}/>
    </div>
  )
  }
}

export default App;
