import React, { Component } from 'react'
import axios from 'axios'
import './createurl.css'

class CreateUrl extends Component {

  constructor(props) {
    super(props)
    this.state = {
      owner: this.props.userid,
      originalurl: '',
      urlnickname: '',
      validationError: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.checkValidUrl = this.checkValidUrl.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  checkValidUrl(url) {
    const regex = RegExp('((https|http)://)((\\w|-)+)(([.]|[/])((\\w|-)+))+')
    const passCheck = regex.test(url)
    if (passCheck === true) {
      return passCheck
    } else {
      return false
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.checkValidUrl(this.state.originalurl)) {
      axios.post('http://api.theoog.net:3333/', {
        owner: this.state.owner,
        originalurl: this.state.originalurl
        // urlnickname: this.state.urlnickname
      })
      .then((results) => {
        // attach new record to user table under urls array
        this.setState({validationError: ''})
        this.props.getAllUrls()
      })
      .catch((err) => {
        console.error(err)
      })
    } else {
      this.setState({validationError: '**invalid url, must use http or https'})
    }
  }

  render() {
    return(
      <div>
      <div className="create-url-container">
        <form>
        <input type="text" name="originalurl" placeholder="paste your url here, http or https required" value={this.state.originalurl} onChange={this.handleChange}/>
        {/* <input type="text" name="urlnickname" value={this.state.urlnickname} onChange={this.handleChange}/> */}
        <button onClick={this.handleSubmit}>shorten</button>
        </form>
      </div>
      <p className="create-url-error">{this.state.validationError}</p>
      </div>
    )
  }
}

export default CreateUrl