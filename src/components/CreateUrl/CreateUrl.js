import React, { Component } from 'react'
import axios from 'axios'
import md5 from 'md5'
import './createurl.css'

class CreateUrl extends Component {

  constructor(props) {
    super(props)
    this.state = {
      owner: this.props.userid, // handed down from app component
      originalurl: '',
      // shorturl: '', // hashed from original url
      urlnickname: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.hashUrl = this.hashUrl.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  hashUrl(url) {
    // a function that hashes the incoming url, sets the hashed value to state
    var hashed = md5(url)
    return hashed
  }

  async handleSubmit(event) {
    event.preventDefault();
    var hashed = await this.hashUrl(this.state.originalurl)
    axios.post('/', {
      owner: this.state.owner,
      originalurl: this.state.originalurl,
      // shorturl: this.state.shorturl,
      shorturl: hashed,
      urlnickname: this.state.urlnickname
    })
    .then((results) => {
      // attach new record to user table under urls array
      this.props.getAllUrls()
    })
    .catch((err) => {
      console.error(err)
    })
  }

  render() {
    return(
      <div>
        <input type="text" name="originalurl" placeholder="paste your long url here" value={this.state.originalurl} onChange={this.handleChange}/>
        {/* <input type="text" name="urlnickname" value={this.state.urlnickname} onChange={this.handleChange}/> */}
        <button onClick={this.handleSubmit}>shorten</button>
      </div>
    )
  }
}

export default CreateUrl