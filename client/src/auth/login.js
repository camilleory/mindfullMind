import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

//import About from './landing/About'



class Login extends React.Component {

  state = {
    email: "",
    password: "",
    redirect: false
  }


  handleFormSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;

      axios.post('/api/login', {email, password})
    .then( response => {
        // this.setState({ username: "", password: "" });
        this.props.updateLoggedInUser(response.data)
        this.setState({ redirect: true })

    })
    .catch( error => console.log(error) )
  }
    
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
    
  

  render() {
    return (
      <div className="App">
        <h4>Log in</h4>
        { this.state.redirect ? <Redirect to="/auth/ritual-choice"></Redirect> : null }
        <form onSubmit={this.handleFormSubmit}>
          <label>Email:</label>
          <input type="text" name="email" value={this.state.email} onChange={ e => this.handleChange(e)}/>
          <label>Password:</label>
          <textarea name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          
          <input type="submit" value="Login" />
          
        </form>
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