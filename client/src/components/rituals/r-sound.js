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
      <div className="App">
      
<Player> </Player>

      </div>
    );
  }
}



export default Soundscape;