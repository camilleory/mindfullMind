import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class Entry extends React.Component {

  state = {
    entriesList: [],
    loading:true
  }
  
  componentDidMount() {
    axios.get('/rituals/journal').then((resp) => {
      console.log(resp.data)
      this.setState({
        entriesList: resp.data,
        loading: false
      })
    })
  }

  render() {
    if(this.state.loading){
      return <div>Loading...</div>
    }
    return (
      <div>
        I am the Journal component <br></br>
        {this.state.entriesList[1].entry}


      </div>
  )
}
}

export default Entry;