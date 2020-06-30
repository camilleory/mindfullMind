
import React from 'react';
import { Link } from 'react-router-dom'




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
      <div className="App">


        <Link to='/description'>
          <h1>Depth Rituals</h1> </Link>



      </div>
    );
  }
}



export default LandingPage;