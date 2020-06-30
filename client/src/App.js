import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landing/Landing-Page'
import Description from './landing/Description'
import About from './landing/About'

import Auth from './auth/auth-options'
import Signup from './auth/signup'
import Login from './auth/login'

import RitualChoice from './components/rituals/ritual-choice'
import Embodiment from './components/rituals/r-body'
import Journal from './components/rituals/r-journal'
import Meditation from './components/rituals/r-meditation'
import Soundscape from './components/rituals/r-sound'








class App extends React.Component {

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


        <Switch>

          {/*  ---------------------------> Landing Routing */}
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/description" component={Description} />
          <Route exact path="/about" component={About} />


          {/*  ---------------------------> Auth Routing */}
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/auth/signup" component={Signup} />
          <Route exact path="/auth/login" component={Login} />


          {/*  ---------------------------> Auth Routing */}
          <Route exact path="/auth/ritual-choice" component={RitualChoice} />
          {/* <Route exact path="/auth/rituals" component={RitualRenderSequence} /> */}



          {/*  ---------------------------> CREATE /JOURNAL/:ID <--------------------
          CREATE UNIQUE USER PATHS FOR LOGGED IN USER INSTEAD OF WHAT'S BELOW */}

          <Route exact path="/auth/embodiment" component={Embodiment} />
          <Route exact path="/auth/meditation" component={Meditation} />
          <Route exact path="/auth/journal" component={Journal} />
          <Route exact path="/auth/soundscape" component={Soundscape} />








          {/* added to display task details page: */}
          {/* <Route exact path="/tasks/:taskId" component={TaskDetails} /> <== !!! */}


        </Switch>


      </div>
    );
  }
}





// export const signup = (username, password) => {
//   return axios.post('/api/signup', { username, password })
//     .then(response => response.data)
// }

export default App;




