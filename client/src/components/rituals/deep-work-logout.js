import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import UIfx from "uifx";
import tickAudio from "./A-Tone-His_Self-1266414414.mp3";
import axios from "axios";

const beep = new UIfx(tickAudio);

class DeepWork extends React.Component {
  state = {
    start: false,
    timer: false,
    numberOfSeconds: 0,
    timeOver: false,
    deepWorkDescription: true
  };

  startDeepWork = () => {
    this.setState({
      start: true
    });
  };

  setTimer = timeLength => {
    if (this.time) {
      clearInterval(this.time);
    }

    this.setState({
      timer: true,
      numberOfSeconds: timeLength
    });

    const myTimer = () => {
      console.log(timeLength);
      timeLength = timeLength - 1;
      this.setState({
        numberOfSeconds: timeLength
      });
      if (timeLength < 0) {
        clearInterval(this.time);
        beep.play();
        this.setState({
          timer: false,
          timeOver: true
        });
        //here add end sound
      }
    };
    this.time = setInterval(myTimer, 1000);
  };

  // Log out
  logoutUser = props => {
    axios
      .post("/api/logout", {})
      .then(response => response.data)
      .then(() => {
        props.updateUser(null); // sets the global user object to 'null'
      });
  };

  render() {
    const formatted = moment
      .utc(this.state.numberOfSeconds * 1000)
      .format("mm:ss");

    return (
      <div className="App">
        <h1>Deep Work Session</h1>
        <hr width="400px" />


        

        <div class="heading dw-render">

{this.state.timer ? <div class="dw-time">{formatted}
              
              </div> : null}

              {this.state.timeOver ? <div>

                <div class="deep-listening-elements">
                  <div class="deep-listening-bar">
                    Message
                  <p class="x"> ╳ </p>
                  </div>

                  <div class="player">Well Done!</div>
                </div>

              </div> : null}


          {this.state.start ? (
            <div>
              <div class="deep-listening-elements">
                <div class="deep-listening-bar">
                  Choose Timing
                  <p class="x"> ╳ </p>
                </div>

                <div class="player">
                  <button
                    onClick={() => this.setTimer(1800)}
                    class="deepwork-button"
                  >
                    30 minutes
                  </button>
                  <button
                    onClick={() => this.setTimer(2700)}
                    class="deepwork-button"
                  >
                    45 minutes
                  </button>
                  <button
                    onClick={() => this.setTimer(3600)}
                    class="deepwork-button"
                  >
                    60 minutes
                  </button>
                </div>
              </div>



             




              <div class="deep-listening-elements">
                <div class="deep-listening-bar">
                  Break
                  <p class="x"> ╳ </p>
                </div>

                <div class="player">
                  <button
                    onClick={() => this.setTimer(600)}
                    class="deepwork-button"
                  >
                    10 minutes{" "}
                  </button>
                </div>
              </div>

              <div>
                <Link to="/">
                  <button
                    onClick={() => this.logoutUser(this.props)}
                    class="deepwork-button"
                  >
                    LOGOUT ↑
                  </button>
                </Link>
              </div>
            </div>
          ) : (
              <div class="dw-description">
                <div class="deep-listening-bar">
                  Focus Time
                <p class="x"> ╳ </p>
                </div>

                <div>
                  <p class="dw-description-text">
                    {" "}
                    After having done the rituals to release yourself from the
                    internal distraction and looping, allow yourself to submerge
                    into Deep Work. 
                    
                    Set aside all devices - putting them into the
                    room next to you, or separating them with a physical barrier.
                    Mitigate all the external distractions. Use this space to
                  continue Deep Work intervals to keep you on track.{" "}
                  </p>
                  <hr width="400px" />
                  <button onClick={this.startDeepWork} class="deepwork-button">
                    START →
                </button>
                </div>
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default DeepWork;
