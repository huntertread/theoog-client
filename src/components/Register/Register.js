import React, { Component } from 'react'
import axios from 'axios'
import md5 from 'md5'
import './register.css'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      passconfirm: '',
      email: '',
      emailconfirm: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.state.password === this.state.passconfirm && this.state.email === this.state.emailconfirm) {
      axios.get(`/getExistingUser/${this.state.username}`)
        .then((results) => {
          if (results.data[0] === undefined) {
            axios.post('/register', {
              username: this.state.username,
              password: md5(this.state.password),
              email: this.state.email
            })
            .then((results) => {
              // console.log(results.data[0])
              this.props.setUser(results.data[0].username, results.data[0].id)
              this.props.setLogIn()
            })
            .catch((err) => {
              console.error(err)
            })
          } else {
            console.log('username is taken')
          }
        })
    } else {
      console.log('email and/or passwords do not match')
    }
  }

  render() {
    if (this.props.registered === true) {
      return (
        <button className="register-button" onClick={this.props.setRegistered}>register</button>
      )
    } else if (this.props.registered === false) {
      return(
        <div className="registration-form-container">
          <form className="registration-form-content">
            <h2>REGISTER</h2>
            <label>
              username:
              <input name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
            </label><br/>
            <label>
              email:
              <input name="email" type="text" value={this.state.email} onChange={this.handleChange}/>
            </label><br/>
            <label>
              confirm email:
              <input name="emailconfirm" type="text" value={this.state.emailconfirm} onChange={this.handleChange}/>
            </label><br/>
            <label>
              password:
              <input name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
            </label><br/>
            <label>
              confirm password:
              <input name="passconfirm" type="password" value={this.state.passconfirm} onChange={this.handleChange}/>
            </label><br/>
            <button onClick={this.handleSubmit}>submit</button>
            <button onClick={this.props.setRegistered}>cancel</button>
          </form>
        </div>
      )
    }
  }
}

export default Register