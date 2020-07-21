import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

//import About from './landing/About'



class Player extends React.Component {
  state = {
    entry: "",
    searchResults: [],
    searchTerm: "",
  }



  handleChangeEntry = (event) => {
    // console.log("EVENT", event.target.value)
    this.setState({
      entry: event.target.value
    })
  }




  handleFormSubmit = (event) => {
    event.preventDefault();

    const entry = this.state.entry;

    console.log(entry)
    // Entry = the word the user typed
    // Axios get request to '/tracks/love
    axios.get('/tracks/' + this.state.entry)
      .then((response) => {
        this.setState({
          searchResults: response.data,
          entry: ""
          // response.data passes data from api
        })
      }).catch(error => console.log(error))
  }


  searchHandler = (searchTerm) => {
    this.setState({
      searchTerm: searchTerm
      // state changes "L" --> "La"
      //react re-renders page and calls render( again)
    })
  }


  render() {

    // let trackInfo =  this.state.i.name
    // console.log(trackInfo)

    return (
      <div className="App">

        <form onSubmit={this.handleFormSubmit}>

          <h4>{this.props.update}</h4>

          <input type="text"
            name="entry"
            value={this.state.entry}
            onChange={e => this.handleChangeEntry(e)}
            placeholder="Search..."
          >
          </input>

          <button type="submit" value="submit">Search</button>
        </form>


        {this.state.searchResults.map(obj => {

          return <iframe src={obj.link} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

        })}

        <h5>Curated State</h5>
        <iframe src="https://open.spotify.com/embed/playlist/2cQNMcRqTa6ENC2zctp6Ce" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"  ></iframe>
        <hr width="200px" />
        <span> Deep Listening  </span>
        <p>The late experimental composer and teacher Pauline Oliveros coined the phrase “deep listening” for just this practice. Defining it as a kind of “radical attentiveness,” she wrote, “I differentiate to hear and to listen. To hear is the physical means that enables perception. To listen is to give attention to what is perceived both acoustically and psychologically.”</p>
        <hr width="200px" />
      </div>
    );
  }
}

//TODO: map through search request;
// display drop down search + choice of 5


export default Player;