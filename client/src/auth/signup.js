import React from 'react';
import { Link, Redirect} from 'react-router-dom'
import axios from "axios";

//import About from './landing/About'

class Signup extends React.Component {

  state = {
      email: "",
      password: "",
      redirect: false
    }


    handleFormSubmit = (event) => {
      event.preventDefault();
      const email = this.state.email;
      const password = this.state.password;
  

      axios.post('/api/signup', {email, password})
      .then(response => {
        // this.setState({
        //   email: "",
        //   password: "",
        // });
         this.props.updateNewUser(response.data)
        this.setState({ redirect: true })
         console.log(response.data)
      })
      .catch(error => console.log(error)) }
  
  
    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    }

  // user is not logged in already --> they are logging in using our React app
  // updateUser = (newUser) => {
  //   this.setState({
  //     loggedInUser: newUser
  //   })
  // }


  render() {
    return (
      <div className="App">
              <h4>Sign up</h4>
          { this.state.redirect ? <Redirect to="/auth/login"></Redirect> : null }
          
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