import React from "react";
import { Link } from "react-router-dom";

//import About from './landing/About'

class Meditation extends React.Component {
  state = {
    slide1: true,
    slide2: false,
    slide3: false,
    player: false
  };

  nextSlide1 = () => {
    this.setState({
      slide1: false,
      slide2: true
    });
  };

  nextSlide2 = () => {
    this.setState({
      slide1: false,
      slide2: false,
      slide3: true
    });
  };

  nextSlide3 = () => {
    this.setState({
      slide1: false,
      slide2: false,
      slide3: false,
      player: true
    });
  };

  render() {
    return (
      <div
        className="App"
        id="meditation-ritual"
        class="fade-in one-point-five"
      >
        <div>
          <h1>Meditation</h1>
          <hr />



          <div  >
            <div class="meditation">
              <div class="bar"> ╳ </div>

              <div class="content-render">
                {this.state.slide1 && (
                  <a onClick={this.nextSlide1} class="content-render-text">
                    <div class="div-text">
                      Allow yourself to submerge into a generative sound
                      meditation by focusing on the breath.
                    </div>
                  </a>
                )}

                {this.state.slide2 && (
                  <a onClick={this.nextSlide2} class="content-render-text">
                    <div>
                      An overstimulated Nervous System can be well supported by
                      a prolongued singular focus and by a lowered input from
                      the outside world.
                    </div>
                  </a>
                )}

                {this.state.slide3 && (
                  <a onClick={this.nextSlide3} class="content-render-text">
                    <div>
                      Connect the steps: Close your eyes. Follow a breathing
                      pattern of 4-7-8. Breathe in for 4s. Hold breath for 7s.
                      Breathe out for 8s.
                      <br />
                      Repeat 4 times or more for a deeper recalibration of the
                      Nervous System.
                    </div>
                  </a>
                )}

                {this.state.player && (
                  <div class="meditation-iframe">
                    <iframe
                      src="https://player.twitch.tv/?channel=endel&parent=depth-rituals.herokuapp.com"
                      frameborder="0"
                      allowfullscreen="true"
                      scrolling="no"
                      autoPlay="true"
                      height="300"
                      width="300"
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Meditation;
