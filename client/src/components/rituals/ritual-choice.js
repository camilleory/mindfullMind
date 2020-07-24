import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//import About from './landing/About'
import Soundscape from "./r-sound";
import Meditation from "./r-meditation";
import Embodiment from "./r-body";
import Journal from "./r-journal";
// import RitualCheckbox from './ritual-checkbox'

class RitualChoice extends React.Component {
  state = {
    rituals: [],
    currentIndex: -1,
    deepWorkButton: false,
    showheader: true,
    ShowDeepWork: false,
    beginButton: false
  };

  onChangeMeditation = () => {
    if (this.state.rituals.includes("meditation")) {
      this.setState({
        rituals: this.state.rituals.filter(r => r !== "meditation")
      });
    } else {
      this.setState({
        rituals: this.state.rituals.concat("meditation")
      });
    }
  };

  onChangeJournal = () => {
    if (this.state.rituals.includes("journal")) {
      this.setState({
        rituals: this.state.rituals.filter(r => r !== "journal")
      });
    } else {
      this.setState({
        rituals: this.state.rituals.concat("journal")
      });
    }
  };

  onChangeEmbodiment = () => {
    if (this.state.rituals.includes("embodiment")) {
      this.setState({
        rituals: this.state.rituals.filter(r => r !== "embodiment")
      });
    } else {
      this.setState({
        rituals: this.state.rituals.concat("embodiment")
      });
    }
  };

  onChangeSoundscape = () => {
    if (this.state.rituals.includes("soundscape")) {
      this.setState({
        rituals: this.state.rituals.filter(r => r !== "soundscape")
      });
    } else {
      this.setState({
        rituals: this.state.rituals.concat("soundscape")
      });
    }
  };

  // Begin Button functionality
  clickHandler = e => {
    //e.preventDefault();
    this.setState({
      currentIndex: this.state.currentIndex + 1,
      showheader: false,
      continueButton: true
    });
    if (this.state.rituals.length - 2 === this.state.currentIndex) {
      this.setState({
        ShowDeepWork: true,
        continueButton: false
      });
    }
  };

  // Continue Button
  nextRitualHandler = e => {
    console.log("ritual arr", this.state.rituals);
    console.log("current idx", this.state.currentIndex);

    //e.preventDefault();
    this.setState({
      currentIndex: this.state.currentIndex + 1
    });
    if (this.state.rituals.length - 2 === this.state.currentIndex) {
      this.setState({
        ShowDeepWork: true,
        continueButton: false
      });
    }
  };

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    let currentRitual = this.state.rituals[this.state.currentIndex];

    let ritualComp;
    if (currentRitual === "soundscape") {
      ritualComp = <Soundscape />;
    } else if (currentRitual === "meditation") {
      ritualComp = <Meditation />;
    } else if (currentRitual === "journal") {
      ritualComp = <Journal currentUser={this.props.currentUser} />;
    } else if (currentRitual === "embodiment") {
      ritualComp = <Embodiment />;
    } else if (currentRitual === "") {
      ritualComp = { deepWorkButton };
    }

    // Begin button
    let beginButton = (
      <button className="btn " class="deepwork-button" onClick={this.clickHandler}>
        BEGIN ↑
      </button>
    );

    // Continue Button

    let continueButton = (
      <button className="btn " class="deepwork-button fade-in one-point-five" onClick={this.nextRitualHandler}>
        NEXT RITUAL  →
      </button>
    );

    //----------------------> deep route path
    let deepWorkButton = (
      <button className="btn" class="deepwork-button fade-in one-point-five">
        <Link to="/auth/deep-work" style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <p> ENTER DEEP WORK  ⇲</p> <h3>  </h3>  </Link>
      </button>
    );

    // console.log("Rituals:", rituals)

    return (
      <div className="App" class="ritual-choice-rendering fade-in one">
        {/* conditional component rendering in ReactJS
      && if this.state.showheader is true, then run the second part of the && which is the form
      */}

        {this.state.showheader && (
          <div>
            <div>
              <h2 class="fade-in one ritual-choice-text">Choose the Rituals</h2>{" "}
            </div>



            <div class="choice-table">
              <div class="choice-bar" >
              
                <h3 class="fade-in one ritual-choice-subtext">
                  Order in which you choose will determine the sequence.
              </h3>
              </div>

              <div>
                {" "}
                <form onSubmit={this.onSubmit} class="ritual-choice-rendering fade-in one-point-five">
                  <div className="form-check" class="check-buttons  ">

                    <label className="form-check-label" class="">
                      <input
                        type="checkbox"
                        checked={this.state.isMeditation}
                        onChange={this.onChangeMeditation}
                        className="form-check-input"


                      />


                      <p class="ritual-in-checkbox center-checkbox"> Meditation</p>
                    </label>
                  </div>

                  <div className="form-check" class="check-buttons ">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isJournal}
                        onChange={this.onChangeJournal}
                        className="form-check-input"
                      />

                      <p class="ritual-in-checkbox"> Journal</p>
                    </label>
                  </div>

                  <div className="form-check" class="check-buttons ">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isSoundscape}
                        onChange={this.onChangeSoundscape}
                        className="form-check-input"
                      />
                      <p class="ritual-in-checkbox">Soundscape </p>
                    </label>
                  </div>

                  <div className="form-check" class="check-buttons ">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isEmbodiment}
                        onChange={this.onChangeEmbodiment}
                        className="form-check-input"
                      />
                      <p class="ritual-in-checkbox">Embodiment </p>
                    </label>
                  </div>
                </form>{" "}
              </div>

            </div>

              <div>{this.state.rituals.length !== 0 && beginButton}</div>
          </div>
        )}

        {ritualComp}

        {this.state.continueButton && continueButton}

        {this.state.ShowDeepWork && deepWorkButton}

       
      </div>
    );
  }
}

export default RitualChoice;
