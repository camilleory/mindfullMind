import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

//import About from './landing/About'



class Player extends React.Component {
  state = {
    entry: "",
    searchResults: []
  }



  handleChangeEntry = (event) => {
    //console.log("EVENT", event.target.value)
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
          searchResults: response.data
        })
      }).catch(error => console.log(error))
  }




  render() {
    return (
      <div className="App">

        <form onSubmit={this.handleFormSubmit}>

          <h4>{this.props.update}</h4>
          <input type="text" name="entry" value={this.state.entry} onChange={e => this.handleChangeEntry(e)}>
          </input>
          <button type="submit" value="submit">Search</button>
        </form>



        <iframe src="https://open.spotify.com/embed/playlist/2cQNMcRqTa6ENC2zctp6Ce" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>


        {this.state.searchResults.map(link => {
          return <p>{link}</p>

        })}


      </div>
    );
  }
}

//TODO: map through search request;
// display drop down search + choice of 5


export default Player;