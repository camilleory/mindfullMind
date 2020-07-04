import React from 'react';
import { Link } from 'react-router-dom'
// import RitualChoice from './components/rituals/ritual-choice'
// import Embodiment from './components/rituals/r-body'
// import Journal from './components/rituals/r-journal'
// import Meditation from './components/rituals/r-meditation'
// import Soundscape from './components/rituals/r-sound'



//import About from './landing/About'



class RitualRenderSequence extends React.Component {

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

        <h1>Probably will render ritual here (but might delete this path if not needed)</h1>

        {/* <RitualChoice
       
          ritualSequence={this.state.isSoundscape ? <Soundscape /> : null}
   
        ></RitualChoice> */}

      

      </div>
    );
  }
}



export default RitualRenderSequence;