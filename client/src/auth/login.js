import React from 'react';
import { Link } from 'react-router-dom'

//import About from './landing/About'



class Login extends React.Component {

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

        <h4>Login form + authentication + redirect to the ritual choice by clicking submit button on the form</h4>

        <button  > <Link to='ritual-choice'> Login </Link></button>
        <br/>
        <Link to='/auth/signup'> Don't have an account? </Link>


      </div>
    );
  }
}



export default Login;