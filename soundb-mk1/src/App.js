import React from 'react';  
import './App.css';
import soundfile from './freerealestate.mp3';
import Sound from 'react-sound';
import KeyboardEventHandler from 'react-keyboard-event-handler';

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
      <button onClick={this.handleClick}>OH</button> 
    </KeyboardEventHandler>
    </div>
  );
}
}

export default App;
