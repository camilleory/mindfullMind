import React from 'react';
// import { Link } from 'react-router-dom'
import axios from 'axios'
import Entry from './journalEntry';

class Journal extends React.Component {

  state = {
    entry: "",
    freeflow: false,
    prompts: false,
    entriesList: [],
    loading:true,
    showEntries: false,
    next: false

  }

  // Display text area if button is clicked
  displayTextArea = () => {
    this.setState({
      freeflow: true,
      prompts: false
    })
  }

  // Display prompts if button is clicked
  displayPrompts = () => {
    this.setState({
      freeflow: true,
      prompts: true
    })
  }

  // Save entry into state and DB when submit is clicked
  saveEntry = (event) => {
    event.preventDefault();
    const entry = this.state.entry
       
    axios.post('/rituals/journal',{entry})
    .then(response =>{
      this.setState({
        entriesList: [response.data, ...this.state.entriesList],
        entry: "",
        owner: "",
      })
    console.log(response.data)
    })
  }

  //Getting user input
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

    //Getting journal entries from database (also when updating)
    componentDidMount() {
      this.updateEntry()
    }

    // Show previous entries when button is clicked
    showEntries = () => {
      this.setState({
        showEntries: !this.state.showEntries,
        // entriesStatus: "Show"
      })
    }

    //Delete entry
    removeEntry = (entryID) => {
    axios.delete('/rituals/journal/' + entryID).then(() => {
      this.setState({
        entriesList: this.state.entriesList.filter(p => p._id !== entryID)
      })
    })
  }

    // Update entry and get entries from DB : here we want only the ones with the user ID
    updateEntry =(response) => {
      axios.get('/rituals/journal').then((resp) => {
        console.log("this is the data", resp.data)
        this.setState({
          entriesList: resp.data.filter(el => el.owner === this.props.currentUser._id).reverse(), 
          loading: false
        })
      })
    }
    nextSlide = () => {
      this.setState({
        next: true
      })
    }

  render() {

    console.log('props', this.props)

    return (
      <div class="fade-in one-point-five">
        <h1>Journal</h1>
        <hr></hr>
        {this.state.next ? 
          <div className="slide-inside-journal">
            {/* make text area and prompts appear when button prompts pressed */}

              <div className="journal-button-div">
                <button className="button-white" onClick={this.displayTextArea}>Free Flow</button> <br/>
                <button className="button-white" onClick={this.displayPrompts}>Deep work prompts</button> <br/></div>
          
            {this.state.prompts ? 
            <div className="prompts">
              <p>- What made you happy today ?</p>
              <p>- What annoyed you today ?</p>
              <p>- What are your plans for tomorrow ?</p>
            </div>
            : null 
            }
        
            {/* make text area appear when button free flow pressed */}
            { this.state.freeflow ? 
            <div>
              <form onSubmit = {this.saveEntry}> 
                <textarea className="enterEntry-input" name = "entry" value = {this.state.entry}
                onChange={e=>this.handleChange(e)} placeholder="Write today's feeling here"></textarea> <br/>
                <button className="journalEntry-button" type="submit">Save</button><hr/>
              </form>     
            </div>: null
            }

            {/* Make previous entries appear when button clicked */}
            {this.state.entriesList.length > 0 ? 
              this.state.showEntries ? 
                <button className="button-white" id="show-entry-button" onClick={this.showEntries}>Hide previous entries</button>
                : <button className="button-white" id="show-entry-button" onClick={this.showEntries}>Show previous entries</button>
            : null}

            {this.state.showEntries ?
            this.state.entriesList.map((c) => <Entry removeEntry = {this.removeEntry} updateEntry={this.updateEntry} entry={c.entry} update={c.updatedAt.slice(0, 16).replace("T", ", ")} key = {c._id} _id={c._id}></Entry>)
            : <div className="journalEntry-div" id="empty-entry-div"></div>}
         
          </div>
          : 
        
          <a onClick={this.nextSlide}>
            <div className="embodiment-div">
              <p>Journal ritual is meant to let you offload the mental loop. Choose one of the options for journal purposes - free flow or with specific prompts.</p>
            </div>
            <p className="prompts">Tap on the screen to continue</p>
          </a>  
          }

      </div>

    );
  }
}



export default Journal; 