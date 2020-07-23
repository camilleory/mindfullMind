import React from "react";
import { Link } from "react-router-dom";

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
      <div
        className="App"
        id="meditation-ritual"
        class="fade-in one-point-five"
      >
        <div>
          <h1>Meditation</h1> 
          
          <div class="meditation">
            <div class="bar">  </div>

            <div>
              <p> Here we tell you all about meditation </p>
            </div>

            <div>
              <iframe
                src="https://player.twitch.tv/?channel=endel&parent=https://depth-rituals.herokuapp.com/auth/ritual-choice"
                frameborder="0"
                allowfullscreen="true"
                scrolling="no"
                autoPlay="false"
                height="300"
                width="300"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Meditation;
