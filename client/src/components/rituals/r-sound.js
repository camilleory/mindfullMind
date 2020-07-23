import React from 'react';
import { Link } from 'react-router-dom'
import Player from './spotify-component';

//import About from './landing/About'



class Soundscape extends React.Component {

  // state = {
  //   loggedInUser: this.props.user
  // }

  // // user is not logged in already --> they are logging in using our React app
  // updateUser = (newUser) => {
  //   this.setState({
  //     loggedInUser: newUser
  //   })
  // }


  render() {
    return (
      <div className="App" class="fade-in one-point-five r-sound-component">

      <h1>Soundscape</h1>
      {/* <h2>Choose a song or enjoy our curated playlist</h2> */}
      
<Player> </Player>

      </div>
    );
  }
}



export default Soundscape;