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
      <div className="slide-inside signup">
        <h3>Log in</h3>
        {/* If there is a user logged in, redirect to ritual choice  */}
        {this.props.currentUser ? <Redirect to="/auth/ritual-choice"></Redirect> : null}
        { this.state.redirect ? <Redirect to="/auth/ritual-choice"></Redirect> : null }

        <form onSubmit={this.handleFormSubmit}>
          <input className="input-auth" placeholder="Email" type="email" name="email" value={this.state.email} required onChange={ e => this.handleChange(e)}/>
          <input className="input-auth" placeholder="Password" name="password" type="password" value={this.state.password} required onChange={ e => this.handleChange(e)} />
          {this.state.errorMessage ? <p className="error-message">{this.state.errorMessage}</p>: null}
          <button type="submit" value="Sign up" className="button-white">Log in</button>          
        </form>
        <a href={process.env.REACT_APP_BASE_URL + '/api/auth/spotify'}> <button className="button-black" id="spotify-button-text">
        Log in with Spotify</button></a>
        <Link to='/auth/signup'> <p className="p-auth">Don't have an account?<br/><b>Sign up</b></p></Link>

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