
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
              <li class="box fade-in l1"> <a style={{ color: 'inherit', textDecoration: 'inherit' }} id="resources-links" href="https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/1455586692" target="_blank"> + Deep Work</a></li>


              <li class="box fade-in l2"> <a style={{ color: 'inherit', textDecoration: 'inherit' }} id="resources-links" href="https://www.humanetech.com/" target="_blank">+ Humane Tech </a></li>


              <li class="box fade-in l3"><a style={{ color: 'inherit', textDecoration: 'inherit' }} id="resources-links" href="https://calmtech.com/" target="_blank">+ Calm Tech  </a></li>


              <li class="box fade-in l4"> <a style={{ color: 'inherit', textDecoration: 'inherit' }} id="resources-links" href="https://www.amazon.com/Distracted-Mind-MIT-Press-High-Tech/dp/0262534436/ref=sr_1_1?crid=3O2W8S24EBYBV&dchild=1&keywords=distracted+mind&qid=1595605142&s=books&sprefix=distracted+m%2Cstripbooks-intl-ship%2C232&sr=1-1" target="_blank"> + The Distracted Mind</a></li>

              <li class="box fade-in l5"> <a style={{ color: 'inherit', textDecoration: 'inherit' }} id="resources-links" href="https://code.endel.io/?code=DEPTHRITUALS" target="_blank">+ FREE Endel Subscirption</a></li>

              <li class="box fade-in l6"> <a style={{ color: 'inherit', textDecoration: 'inherit' }} id="resources-links" 
              href="https://www.notion.so/Distraction-Tracker-29134402dc9f4344924525c2c599efb3" 
              target="_blank"></a>+ Distraction Tracker on Notion</li>

            </ul>


          </p>
        </div>


        <div class="box fade-in ">

          <div >
            <Link to='/description' style={{ color: 'inherit', textDecoration: 'inherit' }}> <p id="about-links">Go Back</p> </Link>
          </div>
          <div >
            <Link to='/auth' style={{ color: 'inherit', textDecoration: 'inherit' }} > <p id="about-links">Start Depth Rituals</p> </Link>
          </div>
          <div >
            <Link to='/auth/deep-work' style={{ color: 'inherit', textDecoration: 'inherit' }} > <p id="about-links">Enter Deep Work Mode</p> </Link>
          </div>


          <div>
            <h5> <p>By <a style={{ color: 'rgb(211, 0, 0, .6)', textDecoration: 'inherit' }} id="resources-links" href="https://www.linkedin.com/in/camille-ory-653478161/" target="_blank">Camille Ory</a>
              <br />&  <a style={{ color: 'rgb(211, 0, 0, .6)', textDecoration: 'inherit' }} id="resources-links" href="https://www.linkedin.com/in/rutazem/" target="_blank">Rūta Žemčugovaitė </a> </p> </h5>
          </div>

        </div>



      </div>
    );
  }
}



export default About;