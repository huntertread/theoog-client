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
      emailconfirm: '',
      unError: '',
      emailError: '',
      pwError: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    axios.get(`http://api.theoog.net:3333/getExistingUser/${this.state.username.toLowerCase()}`)
      .then((results) => {
        if (results.data[0] === undefined) {
          if (this.state.password === this.state.passconfirm) {
            if (this.state.email === this.state.emailconfirm) {
              axios.post('http://api.theoog.net:3333/register', {
                username: this.state.username.toLowerCase(),
                password: md5(this.state.password),
                email: this.state.email
              })
              .then((results) => {
                this.props.setUser(results.data[0].username, results.data[0].id)
                this.props.setLogIn()
              })
              .catch((err) => {
                console.error(err)
              })
          } else {
            this.setState({emailError: '**emails do not match'})
            this.setState({pwError: ''})
          }
        } else {
          this.setState({pwError: '**passwords do not match'})
          this.setState({unError: ''})
        }
      } else {
        this.setState({unError: `**sorry, ${this.state.username} is taken`})
      }
    })
    .catch((err) => {
      console.error(err)
    })
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
            <input name="username" type="text" placeholder="desired username" value={this.state.username} onChange={this.handleChange}/>
            <p className="reg-error">{this.state.unError}</p>
            <input name="email" type="text" placeholder="email" value={this.state.email} onChange={this.handleChange}/>
            <input name="emailconfirm" type="text" placeholder="confirm email" value={this.state.emailconfirm} onChange={this.handleChange}/>
            <p className="reg-error">{this.state.emailError}</p>
            <input name="password" type="password" placeholder="password" value={this.state.password} onChange={this.handleChange}/>
            <input name="passconfirm" type="password" placeholder="confirm password" value={this.state.passconfirm} onChange={this.handleChange}/>
            <p className="reg-error">{this.state.pwError}</p>
            <div className="register-button-container">
              <button className="registration-button" onClick={this.handleSubmit}>submit</button>
              <button className="registration-button" onClick={this.props.setRegistered}>cancel</button>
            </div>
          </form>
        </div>
      )
    }
  }
}

export default Register