import React, { Component } from 'react'
import axios from 'axios'
import './login.css'

class LogIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.get(`/getExistingUser/${this.state.username}`)
      .then((results) => {
        if (results.data[0] === undefined) {
          alert('username or password is incorrect')
        } else if (results.data[0].password === this.state.password) {
          this.props.setUser(results.data[0].username, results.data[0].id)
          this.props.setLogIn()
          this.props.getAllUrls()
        } else {
          alert('username or password is incorrect')
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }

  render() {
    if (this.props.loggedIn === false) {
      return(
        <div>
          <form>
            <label>
              log-in:
              <input name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
              <input name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
              <button onClick={this.handleSubmit}>log in</button>
            </label>
          </form>
        </div>
      )
    } else if (this.props.loggedIn === true) {
      return(
        <div>
          <h1>{`hey there, ${this.props.activeUserName}!`}</h1>
          <button onClick={() => this.props.setLogIn()}>log out</button>
        </div>
      )
    }
  }
}

export default LogIn