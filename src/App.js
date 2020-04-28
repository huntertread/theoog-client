import React, { Component } from 'react';
import LogIn from './components/LogIn/LogIn.js'
import Register from './components/Register/Register.js'
import CreateUrl from './components/CreateUrl/CreateUrl.js'
import ExistingUrlContainer from './components/ExistingUrl/ExistingUrlContainer/ExistingUrlContainer.js'
import Footer from './components/Footer/Footer.js'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      registered: true
    }
    this.setLogIn = this.setLogIn.bind(this)
    this.setRegistered = this.setRegistered.bind(this)
  }

  setLogIn() {
    this.setState({loggedIn: !this.state.loggedIn})
  }

  setRegistered() {
    this.setState({registered: !this.state.registered})
  }

  render() {

    let content;
    if (this.state.loggedIn === true) {
      content =
        <div>
          <LogIn setLogIn={this.setLogIn} loggedIn={this.state.loggedIn} />
          <h1>oog.la url shortening service</h1>
          <CreateUrl />
          <ExistingUrlContainer />
        </div>
    } else if (this.state.loggedIn === false) {
      content =
        <div>
          <LogIn setLogIn={this.setLogIn} loggedIn={this.state.loggedIn} />
          <Register setRegistered={this.setRegistered} registered={this.state.registered} />
          <h1>oog.la url shortening service</h1>
          <p>try it out! urls made below without an account are deleted every night at midnight PST</p>
          <CreateUrl />
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
