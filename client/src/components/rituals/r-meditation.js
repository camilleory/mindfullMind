import React from 'react';
import { Link } from 'react-router-dom'

//import About from './landing/About'



class Meditation extends React.Component {

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

        <h1>Meditation Ritual</h1>
        <p> Here we tell you all about meditation </p>

        <iframe src="https://player.twitch.tv/?channel=endel&parent=localhost" frameborder="0" allowfullscreen="true" scrolling="no" autoPlay="false" height="300" width="300"  ></iframe>


      </div>
    );
  }
}



export default Meditation;