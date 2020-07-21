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
    beginButton: false,

  };

  onChangeMeditation = () => {
    if (this.state.rituals.includes("meditation")) {
      this.setState({
        rituals: this.state.rituals.filter(r => r !== "meditation"),

      });
    } else {
      this.setState({
        rituals: this.state.rituals.concat("meditation"),

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
      ritualComp = <Journal currentUser={this.props.currentUser}/>;
    } else if (currentRitual === "embodiment") {
      ritualComp = <Embodiment />;
    } else if (currentRitual === "") {
      ritualComp = { deepWorkButton };
    }


    // Begin button
    let beginButton = (
      <button className="btn btn-success" onClick={this.clickHandler}>
        Begin
    </button>
    )

    // Continue Button

    let continueButton = (
      <button className="btn btn-success" onClick={this.nextRitualHandler}>
        Continue
      </button>
    );


    //----------------------> deep route path
    let deepWorkButton = (
      <button className="btn btn-success" >
        <Link to='/auth/deep-work'>Deep Work</Link>
      </button>
    );

    // console.log("Rituals:", rituals)

    return (
      <div className="App">
        {/* conditional component rendering in ReactJS
      && if this.state.showheader is true, then run the second part of the && which is the form
      */}

        {this.state.showheader && (
          <div>
            <h4 class= "fade-in one" >Choose the Rituals</h4>
            <p class= "fade-in one"> Order in which you choose will determine the sequence. </p>

            <form onSubmit={this.onSubmit}>

              <div className="form-check" class="check-buttons fade-in two">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    checked={this.state.isMeditation}
                    onChange={this.onChangeMeditation}
                    className="form-check-input"
                  />
                  <p class="ritual-in-checkbox"> Meditation</p> 
                </label>
              </div>

              <div className="form-check" class="check-buttons fade-in two">
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

              <div className="form-check" class="check-buttons fade-in two">
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

              <div className="form-check" class="check-buttons fade-in two">
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

            </form>

            {this.state.rituals.length !== 0 && beginButton}

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
