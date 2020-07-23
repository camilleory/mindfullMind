import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons'


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
    const penIcon = <FontAwesomeIcon icon={faPen} onClick={this.editHandler}/>
    const binIcon = <FontAwesomeIcon icon={faTrashAlt} onClick={this.deleteHandler}/>


    // if(this.state.loading){
    //   return <div>Loading...</div>
    // }
    return (
      <div className="journalEntry-div">
       {this.state.showEditForm ? 
       <form onSubmit={this.handleFormSubmit}>
         <h5>{this.props.update}</h5>
         <textarea className="editEntry-input" type="text" name="entry" value ={this.state.entry} onChange={e => this.handleChangeEntry(e)}>
         </textarea>
         <button className="journalEntry-button" type="submit" value="submit">Edit</button>
       </form>
       :
        <div>       
          <div className="entry-div">
            <h5>{this.props.update}</h5>
            <div id="edit-icons">
              {penIcon}
              {binIcon}
            </div>
          </div>

            <p>{this.props.entry}</p>
        
        </div>}
      </div>
  )
}}
     

export default Entry;