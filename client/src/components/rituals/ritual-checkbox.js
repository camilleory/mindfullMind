import React from 'react';
// import { Link } from 'react-router-dom'

//import About from './landing/About'
import Soundscape from './r-sound'
import Meditation from './r-meditation'
import Embodiment from './r-body'
import Journal from './r-journal'





class RitualCheckbox extends React.Component {


  state = {
    rituals: [],
    currentIndex: -1,
    continueButton: false,
    showheader: true,


  }



  onChangeMeditation = () => {
    if (this.state.rituals.includes()) {
      //this.state.rituals // remove from array


    }
    this.setState(initialState => ({
      rituals: this.state.rituals.concat("meditation")
    }));
  }



  onChangeJournal = () => {
    this.setState(initialState => ({
      rituals: this.state.rituals.concat("journal")
    }));
  }

  onChangeEmbodiment = () => {
    this.setState(initialState => ({
      rituals: this.state.rituals.concat("embodiment")
    }));
  }
  onChangeSoundscape = () => {
    this.setState(initialState => ({
      rituals: this.state.rituals.concat("soundscape")
    }));
  }



  // Submit Button
  clickHandler = (e) => {
    //e.preventDefault();
    this.setState({
      currentIndex: this.state.currentIndex + 1,
      showheader: false

    })
  }


  // Continue Button
  nextRitualHandler = (e) => {
    //e.preventDefault();
    this.setState({
      currentIndex: this.state.currentIndex + 1
    })
  }


  onSubmit = (e) => {
    e.preventDefault()
  }




  render() {

    let currentRitual = this.state.rituals[this.state.currentIndex]

    let ritualComp;
    if (currentRitual === "soundscape") {
      ritualComp = <Soundscape path="/auth/soundscape" />;

    } else if (currentRitual === "meditation") {
      ritualComp = <Meditation />
    } else if (currentRitual === "journal") {
      ritualComp = <Journal />
    } else if (currentRitual === "embodiment") {
      ritualComp = <Embodiment />
    }


    let continueButton = <button className="btn btn-success" onClick={this.nextRitualHandler}>
      Continue
      </button>


    return (
      <div className="App">

      {/* conditional component rendering in ReactJS
      && if this.state.showheader is true, then dun the second part of the && which is the form
      */}
        {this.state.showheader &&

          <div>
            <h4>Choose your rituals before Deep Work</h4>
            {/* 
        <button>Meditation</button>
        <button>Journal</button>
        <button>Embodiment</button>
        <button>Soundscape</button> */}


            <form onSubmit={this.onSubmit}>
              <div className="form-check">
                <label className="form-check-label">
                  <input type="checkbox"
                    checked={this.state.isMeditation}
                    onChange={this.onChangeMeditation}
                    className="form-check-input"
                  />
                  Meditation
            </label>
              </div>

              <div className="form-check">
                <label className="form-check-label">
                  <input type="checkbox"
                    checked={this.state.isJournal}
                    onChange={this.onChangeJournal}
                    className="form-check-input"
                  />
                  Journal
            </label>
              </div>

              <div className="form-check">
                <label className="form-check-label">
                  <input type="checkbox"
                    checked={this.state.isSoundscape}
                    onChange={this.onChangeSoundscape}
                    className="form-check-input"
                  />
                  Soundscape
            </label>
              </div>

              <div className="form-check">
                <label className="form-check-label">
                  <input type="checkbox"
                    checked={this.state.isEmbodiment}
                    onChange={this.onChangeEmbodiment}
                    className="form-check-input"
                  />
                  Embodiment
            </label>
              </div>

              <div className="form-group">
                <button className="btn btn-success" onClick={this.clickHandler}>
                  Start
            </button>
              </div>
            </form>


          </div>

        }



        {ritualComp}
        {continueButton}
      </div>
    );
  }
}



export default RitualCheckbox;