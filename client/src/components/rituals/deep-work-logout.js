import React from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment';
import UIfx from 'uifx';
import tickAudio from './A-Tone-His_Self-1266414414.mp3';


const beep = new UIfx(tickAudio);


class DeepWork extends React.Component {

  state = {
    start: false,
    timer: false,
    numberOfSeconds: 0,
    timeOver: false,
  }

  startBodyScan = () => {
    this.setState({
      start: true
    })
  }

  setTimer = (timeLength) => {
    if (this.time) {
      clearInterval(this.time)
    }

    this.setState({
      timer: true,
      numberOfSeconds: timeLength
    })

    const myTimer = () => {

      console.log(timeLength)
      timeLength = timeLength - 1;
      this.setState({
        numberOfSeconds: timeLength
      })
      if (timeLength < 0) {
        clearInterval(this.time)
        beep.play()
        this.setState({
          timer: false,
          timeOver: true
        })
        //here add end sound
      }
    }
    this.time = setInterval(myTimer, 1000)
  }


  render() {

    const formatted = moment.utc(this.state.numberOfSeconds * 1000).format('mm:ss');

    return (
      <div className="App">

        <h1>Deep Work Session</h1>
        <hr width="400px" />

        <p> After having done the rituals to release yourself from the internal distraction and looping, allow yourself to submerge into Deep Work. Set aside all devices - putting them into the room net to you, or separating them with a physical barrier. Mitigate all the external distractions.
          Use this space to continue Deep Work intervals to keep you on track. </p>
          <hr width="400px" />
        <button onClick={this.startBodyScan}>Start</button>
        {this.state.start ?
          <div>
            <h4>Choose Deep Work Timing</h4>

            <button onClick={() => this.setTimer(1800)}>30 minutes</button>
            <button onClick={() => this.setTimer(2700)} >45 minutes</button>
            <button onClick={() => this.setTimer(3600)} >60 minutes</button>


            {this.state.timer ? <div>{formatted}</div> : null}
            {this.state.timeOver ? <div>Well done !</div> : null}

            <h4>Break</h4>
            <button onClick={() => this.setTimer(600)}>10 minutes </button>
          </div> : null}




        <button> Logout </button>
      </div>
    );
  }
}

export default DeepWork;