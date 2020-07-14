import React from 'react';
import { Link, Redirect } from 'react-router-dom'

//import About from './landing/About'



class Auth extends React.Component {

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
      <div className="slide-inside">
       {/* If a user is looged in, redirect to ritual choice */}
       {this.props.currentUser ? <Redirect to="/auth/ritual-choice"></Redirect> : null}


        {/* Tapping/Clicking on secription text leads to signup/login */}
        <Link to='/auth/signup'> Signup </Link>

        <br />

        {/* Tapping/Clicking on secription text leads to About */}
        <Link to='/auth/login'>Login</Link>
        <br />


        <Link to='/description'>Go back</Link>



      </div>
    );
  }
}



export default Auth;