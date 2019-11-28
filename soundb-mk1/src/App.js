import React from 'react';  
import './App.css';
import soundfile from './500/media.io_bringmeachild.mp3'
import Sound from 'react-sound'
import KeyboardEventHandler from 'react-keyboard-event-handler';

/*class Alert extends React.Component {
render() {
 return (
   <Sound
   url={soundfile}
   playStatus={Sound.status.PLAYING}
   onLoading={this.handleSongLoading}
   onPlaying={this.handleSongPlaying}
   onFinishedPlaying={this.handleSongFinishedPlaying}
   />
  );
 }
}*/
/*
function ComponentA(props) {
  return (<div>
  <KeyboardEventHandler
    handleKeys={["w"]}
    onKeyEvent={((key, e) => props.handleClick())} />
</div>)};*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false
    }
  this.handleClick = this.handleClick.bind(this)
  }

handleClick() {
  this.setState({
    isPlaying: !this.state.isPlaying
  })
}

render() {
  return (
    
    <div className="App">    
<KeyboardEventHandler
    handleKeys={["w"]}
    onKeyEvent={((key, e) => this.handleClick())}/>

  <KeyboardEventHandler
    handleKeys={["w"]}
    onKeyEvent={((key, e) => this.handleClick())}>
        { this.state.isPlaying
        ?   <Sound
        url={soundfile}
        playStatus={Sound.status.PLAYING}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleClick}
        />
        : <Sound
        url={soundfile}
        playStatus={Sound.status.STOPPED}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
        />
      }   
      <button onClick={this.handleClick}>FEED ME</button> 
    </KeyboardEventHandler>
    </div>
  );
}
}

export default App;
