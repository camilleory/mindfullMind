import React from 'react';
import { Link } from 'react-router-dom'

//import About from './landing/About'



class Signup extends React.Component {

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

          <h3>Signup Form + authentication + redirect to the ritual choice by clicking submit button on the form</h3>
          <button  > <Link to='ritual-choice'> Signup </Link></button>
          <br/>
          <Link to='/auth/login'> Alredy have an account? </Link>
      </div>
    );
  }
}



export default Signup;