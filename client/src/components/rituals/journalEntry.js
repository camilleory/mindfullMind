import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class Entry extends React.Component {

  state = {
    showEditForm: false,
    entry: this.props.entry
  }
  
  deleteHandler = () => {
    this.props.removeEntry(this.props._id)
  }

  // Show edit form when button Edit clicked
  editHandler = () => {
    this.setState({
      showEditForm: true,
    })
    // this.props.updateEntry(this.props._id)

  }

  // Save edits to DB
     handleFormSubmit = (event) => {
     const entry = this.state.entry;

      event.preventDefault();

    axios.put(`/rituals/journal/${this.props._id}`, {entry})
    .then( (response) => {
      this.props.updateEntry(this.props._id, response.data )

      this.setState({
         showEditForm: false
       })
    })
    .catch( error => console.log(error) )
  }


  handleChangeEntry = (event) => {  
    this.setState({
      entry:event.target.value
    })
  }


  render() {
    // if(this.state.loading){
    //   return <div>Loading...</div>
    // }
    return (
      <div>
       {this.state.showEditForm ? 
       <form onSubmit={this.handleFormSubmit}>
         <h4>{this.props.update}</h4>
         <textarea type="text" name="entry" value ={this.state.entry} onChange={e => this.handleChangeEntry(e)}>
         </textarea>
         <button type="submit" value="submit">Edit</button>
       </form>
       :
        <div>       
          <div className="entry-div">
            <h5>{this.props.update}</h5>
            <div id="edit-icons">
              <img className="journalImg" src="https://img.icons8.com/android/24/000000/edit.png" onClick={this.editHandler}/>
              <img className="journalImg" src="https://img.icons8.com/windows/32/000000/delete-forever.png" onClick={this.deleteHandler}/>        
            </div>
          </div>

            <p>{this.props.entry}</p>
        
        </div>}
      </div>
  )
}}
     

export default Entry;