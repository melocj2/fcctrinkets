import React from 'react';
import './App.css';
import drum from './images/drum.png'
import smiley from './images/smiley.png'
import freeReal from './sounds/freerealestate.mp3'
import dreams from './sounds/dreams.mp3'
import yeah from './sounds/YEEEAAAHHH.mp3'
import youKnow from './sounds/youknow.mp3'
import jrenn from './sounds/jrenn.mp3'
import papa from './sounds/papa.mp3'
import takinOver from './sounds/takinover.mp3'
import mac from './sounds/mac.mp3'
import kira from './sounds/eatAChip.mp3'


function Display(props) {
  return (
    <div className="Display" id="display">
      <h2 id="inputstuff">{props.name}</h2>
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
      board: true,
      qPressed: false,
      wPressed: false,
      ePressed: false,
      aPressed: false,
      sPressed: false,
      dPressed: false,
      zPressed: false,
      xPressed: false,
      cPressed: false,
      name: "beatlab."
    }
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.qClick = this.qClick.bind(this)
    this.wClick = this.wClick.bind(this)
    this.eClick = this.eClick.bind(this)
    this.aClick = this.aClick.bind(this)
    this.sClick = this.sClick.bind(this)
    this.dClick = this.dClick.bind(this)
    this.zClick = this.zClick.bind(this)
    this.xClick = this.xClick.bind(this)
    this.cClick = this.cClick.bind(this)
    this.toggleBoard = this.toggleBoard.bind(this)
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
    
  }

  handleKeyPress(e) {
    if (e.keyCode === 81) {
      this.qClick();
    }
    if (e.keyCode === 87) {
      this.wClick();
    }
    if (e.keyCode === 69) {
      this.eClick();
    }
    if (e.keyCode === 65) {
      this.aClick();
    }
    if (e.keyCode === 83) {
      this.sClick();
    }
    if (e.keyCode === 68) {
      this.dClick();
    }
    if (e.keyCode === 90) {
      this.zClick();
    }
    if (e.keyCode === 88) {
      this.xClick();
    }
    if (e.keyCode === 67) {
      this.cClick();
    }
}

  qClick() {
    if (this.state.board){
      this.setState({
      name: "Heater-1",
      qPressed: !this.state.qPressed
    })}
    else {
      this.setState({
      name: "It's Free",
      qPressed: !this.state.qPressed
      })
    }
  }

  wClick() {
    if (this.state.board){
      this.setState({
      name: "Heater-2",
      wPressed: !this.state.wPressed
    })}
    else {
      this.setState({
      name: "Hall&Oats",
      wPressed: !this.state.wPressed
      })}
  }

  eClick() {
    if (this.state.board){
      this.setState({
      name: "Heater-3",
      ePressed: !this.state.ePressed
    })}
    else {
      this.setState({
      name: "YEAH!",
      ePressed: !this.state.ePressed
      })}
  }

  aClick() {
    if (this.state.board){
      this.setState({
      name: "Heater-4",
      aPressed: !this.state.aPressed
    })}
    else {
      this.setState({
      name: "50 Cent",
      aPressed: !this.state.aPressed
      })}
    }

    sClick() {
    if (this.state.board){
      this.setState({
      name: "Clap",
      sPressed: !this.state.sPressed
    })}
    else {
      this.setState({
      name: "J Ren",
      sPressed: !this.state.sPressed
      })}
    }

    dClick() {
      if (this.state.board){
        this.setState({
        name: "Open-HH",
        dPressed: !this.state.dPressed
      })}
      else {
        this.setState({
        name: "Papa J",
        dPressed: !this.state.dPressed
        })}
      }

    zClick() {
      if (this.state.board){
        this.setState({
        name: "Kick-n'-Hat",
        zPressed: !this.state.zPressed
      })}
      else {
        this.setState({
        name: "DJ Khalid",
        zPressed: !this.state.zPressed
        })}
      }

    xClick() {
      if (this.state.board){
        this.setState({
        name: "Kick",
        xPressed: !this.state.xPressed
      })}
      else {
        this.setState({
        name: "McGrubie",
        xPressed: !this.state.xPressed
        })}
      }

      cClick() {
        if (this.state.board){
          this.setState({
          name: "Closed-HH",
          cPressed: !this.state.cPressed
        })}
        else {
          this.setState({
          name: "Kira",
          cPressed: !this.state.cPressed
          })}
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
        <button className="drum-pad" id="Q" onMouseDown={this.qClick} style={{backgroundImage: this.state.qPressed ? "radial-gradient(circle closest-side, rgb(206, 206, 206), rgb(169, 245, 169))" : "radial-gradient(circle closest-side, rgb(206, 206, 206), #ededed)"}}>Q</button>
        {this.state.qPressed && this.state.board && <audio ref="audio_tag" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" autoPlay onEnded={this.qClick}/>}
        {this.state.qPressed && !this.state.board && <audio ref="audio_tag" src={freeReal} autoPlay onEnded={this.qClick}/>}

        <button className="drum-pad" id="W" onMouseDown={this.wClick} style={{backgroundImage: this.state.wPressed ? "radial-gradient(circle closest-side, rgb(206, 206, 206), rgb(169, 245, 169))" : "radial-gradient(circle closest-side, rgb(206, 206, 206), #ededed)"}}>W</button>
        {this.state.wPressed && this.state.board && <audio ref="audio_tag" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" autoPlay onEnded={this.wClick}/>}
        {this.state.wPressed && !this.state.board && <audio ref="audio_tag" src={dreams} autoPlay onEnded={this.wClick}/>}

        <button className="drum-pad" id="E" onMouseDown={this.eClick} style={{backgroundImage: this.state.ePressed ? "radial-gradient(circle closest-side, rgb(206, 206, 206), rgb(169, 245, 169))" : "radial-gradient(circle closest-side, rgb(206, 206, 206), #ededed)"}}>E</button>
        {this.state.ePressed && this.state.board && <audio ref="audio_tag" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" autoPlay onEnded={this.eClick}/>}
        {this.state.ePressed && !this.state.board && <audio ref="audio_tag" src={yeah} autoPlay onEnded={this.eClick}/>}

        <button className="drum-pad" id="A" onMouseDown={this.aClick} style={{backgroundImage: this.state.aPressed ? "radial-gradient(circle closest-side, rgb(206, 206, 206), rgb(169, 245, 169))" : "radial-gradient(circle closest-side, rgb(206, 206, 206), #ededed)"}}>A</button>
        {this.state.aPressed && this.state.board && <audio ref="audio_tag" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" autoPlay onEnded={this.aClick}/>}
        {this.state.aPressed && !this.state.board && <audio ref="audio_tag" src={youKnow} autoPlay onEnded={this.aClick}/>}

        <button className="drum-pad" id="S" onMouseDown={this.sClick} style={{backgroundImage: this.state.sPressed ? "radial-gradient(circle closest-side, rgb(206, 206, 206), rgb(169, 245,169))" : "radial-gradient(circle closest-side, rgb(206, 206, 206), #ededed)"}}>S</button>
        {this.state.sPressed && this.state.board && <audio ref="audio_tag" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" autoPlay onEnded={this.sClick}/>}
        {this.state.sPressed && !this.state.board && <audio ref="audio_tag" src={jrenn} autoPlay onEnded={this.sClick}/>}

        <button className="drum-pad" id="D" onMouseDown={this.dClick} style={{backgroundImage: this.state.dPressed ? "radial-gradient(circle closest-side, rgb(206, 206, 206), rgb(169, 245,169))" : "radial-gradient(circle closest-side, rgb(206, 206, 206), #ededed)"}}>D</button>
        {this.state.dPressed && this.state.board && <audio ref="audio_tag" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" autoPlay onEnded={this.dClick}/>}
        {this.state.dPressed && !this.state.board && <audio ref="audio_tag" src={papa} autoPlay onEnded={this.dClick}/>}

        <button className="drum-pad" id="Z" onMouseDown={this.zClick} style={{backgroundImage: this.state.zPressed ? "radial-gradient(circle closest-side, rgb(206, 206, 206), rgb(169, 245,169))" : "radial-gradient(circle closest-side, rgb(206, 206, 206), #ededed)"}}>Z</button>
        {this.state.zPressed && this.state.board && <audio ref="audio_tag" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" autoPlay onEnded={this.zClick}/>}
        {this.state.zPressed && !this.state.board && <audio ref="audio_tag" src={takinOver} autoPlay onEnded={this.zClick}/>}

        <button className="drum-pad" id="X" onMouseDown={this.xClick} style={{backgroundImage: this.state.xPressed ? "radial-gradient(circle closest-side, rgb(206, 206, 206), rgb(169, 245,169))" : "radial-gradient(circle closest-side, rgb(206, 206, 206), #ededed)"}}>X</button>
        {this.state.xPressed && this.state.board && <audio ref="audio_tag" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" autoPlay onEnded={this.xClick}/>} {this.state.xPressed && !this.state.board && <audio ref="audio_tag" src={mac} autoPlay onEnded={this.xClick}/>}

        <button className="drum-pad" id="C" onMouseDown={this.cClick} style={{backgroundImage: this.state.cPressed ? "radial-gradient(circle closest-side, rgb(206, 206, 206), rgb(169, 245,169))" : "radial-gradient(circle closest-side, rgb(206, 206, 206), #ededed)"}}>C</button>
        {this.state.cPressed && this.state.board && <audio ref="audio_tag" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" autoPlay onEnded={this.cClick}/>} {this.state.cPressed && !this.state.board && <audio ref="audio_tag" src={kira} autoPlay onEnded={this.cClick}/>}


      </div>
      <Display name={this.state.name} toggleBoard={this.toggleBoard}/>
    </div>
  )
  }
}

export default App;
