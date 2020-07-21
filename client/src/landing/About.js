
import React from 'react';
import { Link } from 'react-router-dom'



class About extends React.Component {

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
      <div className="about-page">
        <div>
          <p class="box fade-in one">
            Created by a desire to mitigate internal and external distraction. Use this tool every time you have experienced a distractive impulse and need to reclaim your foucs.
  </p>
          <p class="box fade-in two">
            At the every end of Depth Ritual you will be able to start a Deep Work session, with a timing of your choice.
  </p>
          <p>
            <span class="further-reources box fade-in three">Further resources: </span> <br />
            <p class="resources-disclaimer">  (not to be used as distraction) </p>
            <ul>
              <li class="box fade-in l1">+ Deep Work</li>
              <li class="box fade-in l2">+ Humane Tech</li>
              <li class="box fade-in l3"><a style={{ color: 'inherit', textDecoration: 'inherit' }} id="resources-links" href="https://calmtech.com/" target="_blank">+ Calm Tech  </a></li>
              <li class="box fade-in l4">+ The Distracted Mind</li>

              <li class="box fade-in l5"> <a style={{ color: 'inherit', textDecoration: 'inherit' }} id="resources-links" href="https://code.endel.io/?code=DEPTHRITUALS" target="_blank">+ FREE Endel Subscirption</a></li>

              <li class="box fade-in l6">+ Distraction Tracker on Notion</li>

            </ul>


          </p>
        </div>


<div class="box fade-in ">

  <div >
          <Link to='/description' style={{ color: 'inherit', textDecoration: 'inherit' }}> <p id="about-links">Go Back</p> </Link>
        </div>
        <div >
          <Link to='/auth' style={{ color: 'inherit', textDecoration: 'inherit' }} > <p id="about-links">Enter the Deep Mode</p> </Link>
        </div>


        <div>
          <h5> <p>By <a style={{ color: 'inherit', textDecoration: 'inherit' }} id="resources-links" href="https://www.linkedin.com/in/camille-ory-653478161/" target="_blank">Camille Ory</a>
            <br />&  <a style={{ color: 'inherit', textDecoration: 'inherit' }} id="resources-links" href="https://www.linkedin.com/in/rutazem/" target="_blank">Rūta Žemčugovaitė </a> </p> </h5>
        </div>
 
</div>
       


      </div>
    );
  }
}



export default About;