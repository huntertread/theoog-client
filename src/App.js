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
      urls: []
    }
    this.setLogIn = this.setLogIn.bind(this)
    this.setRegistered = this.setRegistered.bind(this)
    this.setUser = this.setUser.bind(this)
    this.getAllUrls = this.getAllUrls.bind(this)
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
      content =
        <div>
          <LogIn setLogIn={this.setLogIn} loggedIn={this.state.loggedIn} setUser={this.setUser} activeUserName={this.state.username}/>
          <Register setRegistered={this.setRegistered} registered={this.state.registered} setLogIn={this.setLogIn} setUser={this.setUser}/>
          <h1>oog.la url shortening service</h1>
          <p>try it out! urls made without an account in the ui below are deleted every night at midnight PST</p>
          <input type="text" placeholder="i dont do anything yet"/>
          <button>shorten</button>
        </div>
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
