
import React from 'react';
import { Link } from 'react-router-dom'
import'../App.css';



class LandingPage extends React.Component {

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
        <Link to='/description' style={{ textDecoration: 'none', color: 'black'}}>
          <div className="slide-inside">
            <h1>Depth Rituals</h1>
           </div>
        </Link>

    );
  }
}



export default LandingPage;