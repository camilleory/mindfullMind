import React from "react";
import { Link, Redirect } from "react-router-dom";

//import About from './landing/About'

class Description extends React.Component {
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

      <div class="fade-in one">




        <div id="second-Landing" >
          <div >
            <div id="link-text">


              <Link to="/auth" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <p>
                  Depth Rituals are designed to bring you back into a Deep Focus through the path of Rituals.
                 <br />
                  Select each ritual according to your preference.
                 <br />
                  On completion move on to the next one,
                 <br />
                  leading you into a Deep Work Session.
              </p>
              </Link>
            </div>


            <div class="about">
              <Link to="/about" style={{ opacity: "inherit", color: 'inherit', textDecoration: 'inherit' }}> About </Link>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Description;
