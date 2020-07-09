import React from 'react';
import { Link, Redirect } from 'react-router-dom'

//import About from './landing/About'



class Description extends React.Component {

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
        <Link to='/auth'> 
        <p> Designed to bring you back into Deep Focus through the path of Rituals. </p>
        
        </Link>

        {/* Tapping/Clicking on secription text leads to About */}
        <Link to='/about'> About </Link>



      </div>
    );
  }
}



export default Description;