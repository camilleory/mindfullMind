import React from 'react';
import { Link } from 'react-router-dom'

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
      <div className="App">

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