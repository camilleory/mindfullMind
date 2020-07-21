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
      <div className="slide-inside auth-choice">
       {/* If a user is looged in, redirect to ritual choice */}
       {this.props.currentUser ? <Redirect to="/auth/ritual-choice"></Redirect> : null}


        {/* Tapping/Clicking on secription text leads to signup/login */}
        <Link to='/auth/signup'><h3>Sign up</h3></Link>

        <br />

        {/* Tapping/Clicking on secription text leads to About */}
        <Link to='/auth/login'><h3>Log in</h3></Link>
        <br />


        <Link to='/description'><p>go back</p></Link>



      </div>
    );
  }
}



export default Auth;