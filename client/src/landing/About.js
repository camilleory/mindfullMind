
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
  <p>
    Created by a desire to mitigate internal and external distraction. Use this tool every time you have experienced a distractive impulse and need to relaim your foucs. 
  </p>
  <p>
    At the every end of Depth Ritual you will be able to start a Deep Work session, with a timing of your choice.
  </p>
  <p>
    <span class="further-reources">Further resources: </span> <br/>
    <p class="resources-disclaimer">  (not to be used as distraction) </p>
    <ul>
     <li>
       + Deep Work
     </li>
     <li>+ Humane Tech</li>
     <li ><a style={{ color: 'inherit', textDecoration: 'inherit'}} id="resources-links" href="https://calmtech.com/" target="_blank">+ Calm Tech  </a></li>
     <li>+ The Distracted Mind</li>

     <li> <a style={{ color: 'inherit', textDecoration: 'inherit'}} id="resources-links" href="https://code.endel.io/?code=DEPTHRITUALS" target="_blank">+ FREE Endel Subscirption</a></li>

<li>+ Distraction Tracker on Notion</li>

    </ul>

  
  </p>
</div>
      
       
      <div >
        <Link to='/description' style={{ color: 'inherit', textDecoration: 'inherit'}}> <p id="about-links">Go Back</p> </Link>
      </div>
      <div >
        <Link to='/auth' style={{ color: 'inherit', textDecoration: 'inherit'}} > <p id="about-links">Enter the Deep Mode</p> </Link>
      </div>

        
        <div>
         <h4> <p>By <a style={{ color: 'inherit', textDecoration: 'inherit'}} id="resources-links" href="https://www.linkedin.com/in/camille-ory-653478161/" target="_blank">Camille Ory</a>
        <br/>&  <a style={{ color: 'inherit', textDecoration: 'inherit'}} id="resources-links" href="https://www.linkedin.com/in/rutazem/" target="_blank">Rūta Žemčugovaitė </a> </p> </h4>
      </div>
        


      </div>
    );
  }
}



export default About;