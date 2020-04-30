import React, { Component } from 'react';
import LogIn from './components/LogIn/LogIn.js'
import Register from './components/Register/Register.js'
import CreateUrl from './components/CreateUrl/CreateUrl.js'
import ExistingUrlContainer from './components/ExistingUrl/ExistingUrlContainer/ExistingUrlContainer.js'
import Footer from './components/Footer/Footer.js'
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: 'anon',
      userid: '1',
      registered: true,
      createdAnon: false,
      anonUrlSubmit: '',
      anonUrlReturn: [],
      urls: []
    }
    this.setLogIn = this.setLogIn.bind(this)
    this.setRegistered = this.setRegistered.bind(this)
    this.setUser = this.setUser.bind(this)
    this.getAllUrls = this.getAllUrls.bind(this)
    this.submitAnon = this.submitAnon.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  setLogIn() {
    this.setState({loggedIn: !this.state.loggedIn})
  }

  setRegistered() {
    this.setState({registered: !this.state.registered})
  }

  setUser(username, userid) {
    this.setState({username: username, userid: userid})
  }

  getAllUrls() {
    axios.get(`/getallurls/${this.state.userid}`)
      .then((response) => {
        this.setState({urls: response.data.reverse()})
      })
      .catch((err) => {
        console.error(err)
      })
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  submitAnon() {
    axios.post('/', {
      owner: this.state.userid,
      originalurl: this.state.anonUrlSubmit,
      shorturl: this.state.shorturl
    })
      .then((response) => {
        this.setState({anonUrlReturn: response.data[0]})
        console.log(this.state.anonUrlReturn)
      })
  }

  componentDidMount() {
    this.getAllUrls()
  }

  render() {

    let content;
    if (this.state.loggedIn === true) {
      content =
        <div>
          <LogIn setLogIn={this.setLogIn} loggedIn={this.state.loggedIn} setUser={this.setUser} getAllUrls={this.getAllUrls} activeUserName={this.state.username}/>
          <h1>your urls:</h1>
          <CreateUrl getAllUrls={this.getAllUrls} username={this.state.username} userid={this.state.userid}/>
          <ExistingUrlContainer urls={this.state.urls}/>
        </div>
    } else if (this.state.loggedIn === false) {
      if (this.state.anonUrlReturn.length === 0) {
        content =
        <div>
          <LogIn setLogIn={this.setLogIn} loggedIn={this.state.loggedIn} setUser={this.setUser} activeUserName={this.state.username}/>
          <Register setRegistered={this.setRegistered} registered={this.state.registered} setLogIn={this.setLogIn} setUser={this.setUser}/>
          <h1>oog.la url shortening service</h1>
          <p>try it out! urls made without an account using the ui below are deleted every night at midnight PST</p>
          <input name="anonUrlSubmit" type="text" placeholder="paste your url here" value={this.state.anonUrlSubmit} onChange={this.handleChange}/>
          <button onClick={this.submitAnon}>shorten</button>
        </div>
      } else {
        content =
        <div>
          <LogIn setLogIn={this.setLogIn} loggedIn={this.state.loggedIn} setUser={this.setUser} activeUserName={this.state.username}/>
          <Register setRegistered={this.setRegistered} registered={this.state.registered} setLogIn={this.setLogIn} setUser={this.setUser}/>
          <h1>oog.la url shortening service</h1>
          <p>try it out! urls made without an account using the ui below are deleted every night at midnight PST</p>
          <input name="anonUrlSubmit" type="text" placeholder="paste your url here" value={this.state.anonUrlSubmit} onChange={this.handleChange}/>
          <button onClick={this.submitAnon}>shorten</button>
          <p>your short url: {this.state.anonUrlReturn.originalurl}</p>
        </div>
      }
    }

    return (
      <div className="App">
        {content}
        <Footer />
      </div>
    );
  }
}

export default App;
