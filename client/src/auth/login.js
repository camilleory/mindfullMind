import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

//import About from './landing/About'



class Login extends React.Component {

  state = {
    email: "",
    password: "",
    redirect: false,
    errorMessage: ""
  }


  handleFormSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;

      axios.post('/api/login', {email, password})
    .then( response => {
      console.log(response.data)
        this.props.updateLoggedInUser(response.data)
        this.setState({ redirect: true })

    })
    .catch( error => {
      this.setState({
        errorMessage: error.response.data.message,
      })
    }) 
  }
    
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
    

  render() {
    return (
      <div className="App">
        <h4>Log in</h4>
        {/* If there is a user logged in, redirect to ritual choice  */}
        {this.props.currentUser ? <Redirect to="/auth/ritual-choice"></Redirect> : null}
        { this.state.redirect ? <Redirect to="/auth/ritual-choice"></Redirect> : null }

        <form onSubmit={this.handleFormSubmit}>
          <label>Email:</label>
          <input type="text" name="email" value={this.state.email} required onChange={ e => this.handleChange(e)}/>
          <label>Password:</label>
          <input name="password" type="password" value={this.state.password} required onChange={ e => this.handleChange(e)} />
          
          <input type="submit" value="Login" />
          
        </form>
          {this.state.errorMessage ? <p>{this.state.errorMessage}</p>: null}
        <Link to='/auth/signup'> Don't have an account? </Link>

      </div>

    );
  }
}


// Log out

// axios.post('/api/logout', {})
//     .then(response => response.data)
    
//     .then(() => {
//       props.updateUser(null);  // sets the global user object to 'null'
//     })



export default Login;