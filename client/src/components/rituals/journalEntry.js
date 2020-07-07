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
    this.props.updateEntry(this.props._id)

  }

  // Save edits to DB
     handleFormSubmit = (event) => {
     const entry = this.state.entry;

    event.preventDefault();

    axios.put(`/rituals/journal/${this.props._id}`, {entry})
    .then( () => {
       this.props.updateEntry(this.props._id)
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
         <input type="text" name="entry" value ={this.state.entry} onChange={e => this.handleChangeEntry(e)}>
         </input>
         <button type="submit" value="submit">Edit</button>
       </form>
       :<div>
        <h4>{this.props.update}</h4>
        <p>{this.props.entry}</p>
        <button onClick={this.editHandler}>Edit</button>
        <button onClick={this.deleteHandler}>Delete</button>
        </div>}
      </div>
  )
}}
     

export default Entry;