import React, { Component } from 'react'
import md5 from 'md5'
import axios from 'axios'
import './login.css'

class LogIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      validationMessage: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();

    // get login
    // console.log('login get request')
    // axios.get('https://api.theoog.net/login')
    //   .then((results) => {
    //     console.log('login get route results', results)
    //   })
    //   .catch((err) => {
    //     console.error(err)
    //   })

    // post login
    console.log('login post request')
    axios({
      method: 'post',
      url: 'https://api.theoog.net/login',
      data: {
        username: this.state.username.toLowerCase(),
        password: this.state.password
      }
    })
      .then((results) => {
        console.log('login post route results:', results.data)
        if (results.data[0] === undefined) {
          this.setState({validationMessage: '**username or password is incorrect'})
        } else if (results.data[0]) {
          this.props.setUser(results.data[0].username, results.data[0].id)
          this.props.setLogIn()
          this.props.getUserUrls()
        } else {
          this.setState({validationMessage: '**incorrect username or password'})
        }
      })
      .catch((err) => {
        console.error(err)
      })

    // existing route
    // axios.get(`https://api.theoog.net/getExistingUser/${this.state.username.toLowerCase()}`)
    //   .then((results) => {
    //     if (results.data[0] === undefined) {
    //       this.setState({validationMessage: '**username or password is incorrect'})
    //     } else if (results.data[0].password === md5(this.state.password)) {
    //       this.props.setUser(results.data[0].username, results.data[0].id)
    //       this.props.setLogIn()
    //       this.props.getUserUrls()
    //     } else {
    //       this.setState({validationMessage: '**incorrect username or password'})
    //     }
    //   })
    //   .catch((err) => {
    //     console.error(err)
    //   })
  }

  render() {
    if (this.props.loggedIn === false) {
      return(
        <div className="login-container">
          <form className="login-form-content">
            <input name="username" type="text" placeholder="username" value={this.state.username} onChange={this.handleChange}/>
            <input name="password" type="password" placeholder="password" value={this.state.password} onChange={this.handleChange}/>
            <button onClick={this.handleSubmit}>log in</button>
          </form>
          <p className="unpw-validation-error">{this.state.validationMessage}</p>
        </div>
      )
    } else if (this.props.loggedIn === true) {
      return(
        <div className="logout-container">
          <button onClick={() => this.props.setLogIn()}>log out</button>
        </div>
      )
    }
  }
}

export default LogIn