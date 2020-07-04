import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

//import About from './landing/About'



class RitualChoice extends React.Component {


  state = {
    rituals: [],

    isMeditation: false,
    isJournal: false,
    isEmbodiment: false,
    isSoundscape: false,


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
    this.setState(initialState => ({
      isMeditation: !initialState.isMeditation,
    }));
  }

  onChangeJournal = () => {
    this.setState(initialState => ({
      isJournal: !initialState.isJournal,
    }));
  }

  onChangeEmbodiment = () => {
    this.setState(initialState => ({
      isEmbodiment: !initialState.isEmbodiment,
    }));
  }
  onChangeSoundscape = () => {
    this.setState(initialState => ({
      isSoundscape: !initialState.isSoundscape,
    }));
  }



  // Submit
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }


  // Log out
    //  logoutUser = (props) =>{
    //   axios.post('/api/logout', {})
    //   .then(response => response.data)      
    //   .then(() => {
    //     props.updateUser(null);  // sets the global user object to 'null'
    //   })
    // }

  render() {
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
            <button className="btn btn-success">
              Save
            </button>
          </div>
        </form>
        {/* <Link to='/'>
              <button onClick={() => this.logoutUser(this.props)}>Logout</button>
            </Link> */}

      </div>
    );
  }
}



export default RitualChoice;