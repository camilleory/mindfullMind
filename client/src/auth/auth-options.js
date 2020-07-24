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
      <div className="slide-inside auth-choice"  >
       {/* If a user is looged in, redirect to ritual choice */}
       {this.props.currentUser ? <Redirect to="/auth/ritual-choice"></Redirect> : null}


       <div class="">

       </div>

        <div>
         <Link to='/auth/signup'><h3 class="deepwork-button">Sign up</h3></Link> 
        </div>

        <div>
                  <Link to='/auth/login'><h3 class="deepwork-button">Log in</h3></Link>
        </div>

        <div>
          <Link to='/description'><p class="deepwork-button">GO BACK</p></Link>
        </div>
        


        



      </div>
    );
  }
}



export default Auth;