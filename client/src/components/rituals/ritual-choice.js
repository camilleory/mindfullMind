import React from 'react';
// import { Link } from 'react-router-dom'

//import About from './landing/About'
import Soundscape from './r-sound'




class RitualChoice extends React.Component {


  state = {
    rituals: [],
    currentIndex: -1

    // isMeditation: false,
    // isJournal: false,
    // isEmbodiment: false,
    // isSoundscape: false,


  }

  // state = {
  //   loggedInUser: this.props.user
  // }

  // // user is not logged in already --> they are logging in using our React app
  // updateUser = (newUser) => {
  //   this.setState({
  //     loggedInUser: newUser
  //   })
  // }


  componentDidMount() {

    this.setState({
      // rituals: [] - push ritual into ritual array when clicked once
      // change button color when clicked once
      // when clicked for second time - unpush and return the color to it's normal
    })

  }


  onChangeMeditation = () => {
    if (this.state.rituals.includes("meditation")) {
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



  // Submit
  clickHandler = (e) => {
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

    return (
      <div className="App">

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

        {currentRitual}

        {this.state.isSoundscape ? <Soundscape /> : null}



        {/* 
        
      - understand the sequence
      - choose/un-choose operator - array remove or concat
      - remove the choice check-boxes once the start is clicked (operator).then
      - render the actual components 
      - turn "start" into "continue" */}

      </div>
    );
  }
}



export default RitualChoice;