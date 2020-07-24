import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//import About from './landing/About'

class Player extends React.Component {
  state = {
    entry: "",
    searchResults: [],
    searchTerm: "",
    deepListeningSlide1: true,
    deepListeningSlide2: false,
    playerSearch: false
  };

  nextSlide = () => {
    this.setState({
      deepListeningSlide2: true,
      deepListeningSlide1: false
    });
  };

  nextSlideExercise = () => {
    this.setState({
      playerSearch: true,
      deepListeningSlide1: false,
      deepListeningSlide2: false
    });
  };

  handleChangeEntry = event => {
    // console.log("EVENT", event.target.value)
    this.setState({
      entry: event.target.value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const entry = this.state.entry;

    console.log(entry);
    // Entry = the word the user typed
    // Axios get request to '/tracks/love
    axios
      .get("/tracks/" + this.state.entry)
      .then(response => {
        this.setState({
          searchResults: response.data,
          entry: ""
          // response.data passes data from api
        });
      })
      .catch(error => console.log(error));
  };

  searchHandler = searchTerm => {
    this.setState({
      searchTerm: searchTerm
      // state changes "L" --> "La"
      //react re-renders page and calls render( again)
    });
  };

  render() {
    return (
      <div className="App">
        <div class="heading">
          {this.state.deepListeningSlide1 && (
            <a onClick={this.nextSlide}>
              <div class="deep-listening">
                <div class="deep-listening-bar">
                  Deep Listening
                  <p class="x"> ╳ </p>
                </div>

                <div>
                  <p class="deep-listening-text">
                    The late experimental composer and teacher Pauline Oliveros
                    coined the phrase “deep listening” for just this practice.
                    Defining it as a kind of “radical attentiveness,” she wrote,
                    “I differentiate to hear and to listen. To hear is the
                    physical means that enables perception. To listen is to give
                    attention to what is perceived both acoustically and
                    psychologically.”
                  </p>
                </div>
              </div>
            </a>
          )}

          {this.state.deepListeningSlide2 && (
            <a onClick={this.nextSlideExercise}>
              <div class="deep-listening">
                <div class="deep-listening-bar">
                  {" "}
                  Deep Listening
                  <p class="x"> ╳ </p>
                </div>

                <div>
                  <p class="deep-listening-text">
                  Deep listening allows to expand your awareness to sound. Instead of using sound as a background, bring it into the forefront of your attention. Explore different sensations, emotions, as well as different sounds your perceive in the Ritual. Choose your own track or listen to the Curated State.
                  </p>
                </div>
              </div>
            </a>
          )}

          {this.state.playerSearch && (
            <div class="deep-listening">
              <div class="deep-listening-bar">
                {" "}
                Deep Listening
                <p class="x"> ╳ </p>
              </div>

              <div>
                <div class="element-render">
                  <div>
                    <form onSubmit={this.handleFormSubmit} autocomplete="off">
                      <h4>{this.props.update}</h4>
                      <input
                        type="input"
                        name="entry"
                        value={this.state.entry}
                        onChange={e => this.handleChangeEntry(e)}
                        placeholder="Choose your state..."
                        id="search-input"
                      ></input>
                      <button
                        type="submit"
                        value="submit"
                        class="deepwork-button"
                      >
                        SEARCH ↑
                      </button>{" "}
                    </form>
                  </div>

                  <div class="deep-listening-elements">
                    {this.state.searchResults.map(obj => {
                      return (
                        <div>
                          <div class="deep-listening-bar">
                            Chosen State
                            <p class="x"> ╳ </p>
                          </div>

                          <div class="player">
                            <iframe
                              src={obj.link}
                              width="300"
                              height="380"
                              frameborder="0"
                              allowtransparency="true"
                              allow="encrypted-media"
                            ></iframe>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div class="deep-listening-elements">
                    <div class="deep-listening-bar">
                      Curated State
                      <p class="x"> ╳ </p>
                    </div>

                    <div class="player">
                      <iframe
                        src="https://open.spotify.com/embed/playlist/0SHeWtvVqSFMXa43wvrFUK"
                        width="300"
                        height="380"
                        frameborder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {this.props.deepWorkButton}
        </div>
      </div>
    );
  }
}

//TODO: map through search request;
// display drop down search + choice of 5

export default Player;
