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
    showEntries: false
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

    //Getting journal entries from database
    componentDidMount() {
      axios.get('/rituals/journal').then((resp) => {
        console.log(resp.data)
        this.setState({
          entriesList: resp.data.reverse(),
          loading: false
        })
      })
    }

    // Show previous entries when button is clicked
    showEntries = () => {
      this.setState({
        showEntries: !this.state.showEntries
      })
    }

    //Delete entry
    removeEntry = (entryID) => {
    axios.delete('rituals/journal' + entryID).then(() => {
      this.setState({
        entriesList: this.state.entriesList.filter(p => p._id !== entryID)
      })
    })
  }


  render() {
    return (
      <div>
        <h4>Journal</h4>
        <p>Journal ritual is meant to let you offload the mental loop. Choose one of the options for journal purposes - free flow or with specific prompts.</p>
        <hr></hr>
                
      {/* make text area and prompts appear when button prompts pressed */}
        <button onClick={this.displayTextArea}>Free Flow</button> <br/>
        <button onClick={this.displayPrompts}>Deep work prompts</button> <br/>
        
        { this.state.prompts ? <div>
        <p>Prompt 1</p>
        <p>Prompt 2</p>
        <p>Prompt 3</p>
        <p>Prompt 4</p>
        </div>: null }  
        
        {/* make text area appear when button free flow pressed */}
        { this.state.freeflow ? 
        <div>
          <form onSubmit = {this.saveEntry}> 
            <textarea name = "entry" value = {this.state.entry}
            onChange={e=>this.handleChange(e)} placeholder="Write today's feeling here"></textarea> <br/>
            <button type="submit">Submit</button><hr/>
          </form>     
      </div>: null }

          {/* Make previous entries appear when button clicked */}
         <button onClick={this.showEntries}>Show previous entries</button>
          {this.state.showEntries ?
          this.state.entriesList.map((c) => <Entry removeEntry = {this.removeEntry} entry={c.entry} update={c.updatedAt} key = {c.id} id={c.id}></Entry>)
            : null}

      </div>
    );
  }
}



export default Journal; 