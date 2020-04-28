import React, { Component } from 'react'
import axios from 'axios'
import './existingurlcontainer.css'
import IndividualUrl from '../IndividualUrl/IndividualUrl.js'

class ExistingUrlContainer extends Component {
  constructor() {
    super()
    this.state = {
      urls: []
    }
    this.getAllUrls = this.getAllUrls.bind(this)
  }

  getAllUrls() {
    axios.get('/getallurls')
      .then((response) => {
        this.setState({urls: response.data})
      })
      .catch((err) => {
        console.error(err)
      })
  }

  componentDidMount() {
    this.getAllUrls()
  }

  render() {
    return(
      <div className="existing-url-container">
        {
          this.state.urls.map((urlproperties, i) => <IndividualUrl key={i} urlproperties={urlproperties} />)
        }
      </div>
    )
  }
}

export default ExistingUrlContainer