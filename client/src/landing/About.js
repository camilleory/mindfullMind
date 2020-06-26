
import React from 'react';
import { Link } from 'react-router-dom'



class About extends React.Component {

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
        <h1> I am about page - some info about us</h1>
        <Link to='/description'> <h2>Go back</h2> </Link>
        <Link to='/auth'> <h2>Enter the Deep Mode</h2> </Link>


      </div>
    );
  }
}



export default About;