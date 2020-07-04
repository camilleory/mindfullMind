import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class Journal extends React.Component {

  state = {
    entry: "",
    freeflow: false,
    prompts: false
  }

    displayTextArea = () => {
      this.setState({
        freeflow: true,
        prompts: false
      })
    }

    displayPrompts = () => {
      this.setState({
        freeflow: true,
        prompts: true
      })
    }

    saveEntry = (event) => {
      event.preventDefault();
      const entry = this.state.entry
      
      axios.post('/rituals/journal',{entry})
      .then(response =>{
        this.setState({
          entry: ""
        })
        console.log(response.data)
      })

    }

    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
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


        <h4>Previous entries</h4>
        <p>Previous entries here</p>
      </div>
    );
  }
}



export default Journal;