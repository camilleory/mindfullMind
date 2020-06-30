import React from 'react';
import { Link } from 'react-router-dom'
import axios from "axios";

//import About from './landing/About'

class Signup extends React.Component {

  state = {
      email: "",
      password: ""
    }


    handleFormSubmit = (event) => {
      event.preventDefault();
      const email = this.state.email;
      const password = this.state.password;
  
      axios.post('/auth/signup', {email, password})
        .then (() => {
          console.log('user sent to DB', email, password)
        })
        // (response => {
        //   this.setState({
        //     username: "",
        //     password: "",
        //   });
          // this.props.updateUser(response)
        // })
        .catch(error => console.log(error))
    }
  
    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    }

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
          <form onSubmit={this.handleFormSubmit}>
          <label>Email:</label>
          <input type="email" name="email" value={this.state.email} onChange={e => this.handleChange(e)} />

          <label>Password:</label>
          <textarea name="password" value={this.state.password} onChange={e => this.handleChange(e)} />

          <input type="submit" value="Signup" />
        </form>

          {/* <button  > <Link to='ritual-choice'> Signup </Link></button> */}
          <br/>
          <Link to='/auth/login'> Alredy have an account? </Link>
      </div>
    );
  }
}



export default Signup;