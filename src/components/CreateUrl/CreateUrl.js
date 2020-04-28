import React, { Component } from 'react'
import axios from 'axios'

class CreateUrl extends Component {

  constructor() {
    super()
    this.state = {
      owner: '',
      originalurl: '',
      shorturl: '',
      urlnickname: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/', { // update this route for production
      owner: this.state.owner,
      originalurl: this.state.originalurl,
      shorturl: this.state.shorturl,
      urlnickname: this.state.urlnickname
    })
    .then((results) => {
      console.log(results.data[0]) // do something useful with this :P
    })
    .catch((err) => {
      console.error(err)
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            owner:
            <input type="text" name="owner" value={this.state.owner} onChange={this.handleChange}/>
          </label><br />
          <label>
            original url:
            <input type="text" name="originalurl" value={this.state.originalurl} onChange={this.handleChange}/>
          </label><br />
          <label>
            short url:
            <input type="text" name="shorturl" value={this.state.shorturl} onChange={this.handleChange}/>
          </label><br />
          <label>
            nick name:
            <input type="text" name="urlnickname" value={this.state.urlnickname} onChange={this.handleChange}/>
          </label><br />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default CreateUrl