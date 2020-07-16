
import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';



class LandingPage extends React.Component {

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


      <div id="landing">

        <Link to='/description'style={{ color: 'inherit', textDecoration: 'inherit' }} >

          <h1>DEPTH
              RITUALS</h1>

        </Link>
      </div>
    );
  }
}



export default LandingPage;