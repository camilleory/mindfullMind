import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class Entry extends React.Component {

  state = {
    // entriesList: [],
    //loading:true
  }
  
  deleteHandler = () => {
    this.props.removeEntry(this.props.id)
  }

  render() {
    // if(this.state.loading){
    //   return <div>Loading...</div>
    // }
    return (
      <div>
        <h4>{this.props.update}</h4>
        <p>{this.props.entry}</p>
        <button>Edit</button>
        <button onClick={this.deleteHandler}>Delete</button>
      </div>
  )
}
}

export default Entry;