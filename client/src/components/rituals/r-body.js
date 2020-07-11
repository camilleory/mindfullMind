import React from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment';
import UIfx from 'uifx';
import tickAudio from './A-Tone-His_Self-1266414414.mp3';


const beep = new UIfx(tickAudio);


class Embodiment extends React.Component {

  state = {
    start: false,
    timer: false,
    numberOfSeconds: 0,
    timeOver: false,
  }

  startBodyScan = () => {
    this.setState ({
      start: true
    })
  }  

  setTimer = (timeLength) => {
    if (this.time){
      clearInterval(this.time)
    }

    this.setState({
      timer: true,
      numberOfSeconds: timeLength
    })

    const myTimer = () => { 

      console.log(timeLength)
      timeLength = timeLength -1;
      this.setState({
        numberOfSeconds: timeLength
      })
        if (timeLength<0){
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

    const formatted = moment.utc(this.state.numberOfSeconds*1000).format('mm:ss');

    return (
      <div className="App">

        <h1>Embodiment</h1>
        <hr/>
        <h2>Body scan</h2>
        <p>The body scan method allows you to connect with you inner self, ground yourself and get a break from everyday's struggles and stimulations. </p>
        <p>Close your eyes and scan your body from head to toes, feeling the points of tensions, just watching them. Whenever you realise you've been distracted, come back to scanning your body.</p>
        <button onClick = {this.startBodyScan}>Start</button>
        {this.state.start ? 
          <div>
          <button onClick = {() => this.setTimer(300)}>5 minutes</button>
          <button onClick = {() => this.setTimer(600)}>10 minutes</button>
          <button onClick = {() => this.setTimer(900)} >15 minutes</button>
          </div> : null}
        {this.state.timer ? <div>{formatted}</div> : null}
        {this.state.timeOver ? <div>Well done !</div> : null}
      </div>
    );
  }
}

export default Embodiment;