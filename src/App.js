import React, { Component } from 'react'
import LogIn from './components/LogIn/LogIn.js'
import Register from './components/Register/Register.js'
import CreateUrl from './components/CreateUrl/CreateUrl.js'
import ExistingUrlContainer from './components/ExistingUrl/ExistingUrlContainer/ExistingUrlContainer.js'
import Footer from './components/Footer/Footer.js'
import MediaQuery from 'react-responsive'
import axios from 'axios'
import md5 from 'md5'
import './App.css'

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
      urlError: '',
      anonUrlReturn: [],
      urls: [],
      mobileNavOpen: false
    }
    this.setLogIn = this.setLogIn.bind(this)
    this.setRegistered = this.setRegistered.bind(this)
    this.setUser = this.setUser.bind(this)
    this.getAllUrls = this.getAllUrls.bind(this)
    this.submitAnon = this.submitAnon.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.hashUrl = this.hashUrl.bind(this)
    this.getRedirect = this.getRedirect.bind(this)
    this.checkValidUrl = this.checkValidUrl.bind(this)
    this.clickMobileNav = this.clickMobileNav.bind(this)
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

  getRedirect() {
    const noHash = window.location.hash.substring(1)
    axios.get(`https://api.theoog.net/${noHash}`)
      .then((results) => {
        window.location.href = results.data[0].originalurl
      })
      .catch((err) => {
        console.error(err)
      })
  }

  getAllUrls() {
    axios.get(`https://api.theoog.net/getallurls/${this.state.userid}`)
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

  hashUrl(url) {
    var hashed = md5(url)
    return hashed
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

  clickMobileNav() {
    this.setState({mobileNavOpen: !this.state.mobileNavOpen})
  }

  submitAnon(event) {
    event.preventDefault()
    if (this.checkValidUrl(this.state.anonUrlSubmit)) {
      var hashed = this.hashUrl(this.state.anonUrlSubmit)
      axios.post('https://api.theoog.net/', {
        owner: this.state.userid,
        originalurl: this.state.anonUrlSubmit,
        shorturl: hashed
      })
      .then((response) => {
        this.setState({anonUrlReturn: response.data[0]})
        this.setState({urlError: ''})
      })
    } else {
      this.setState({urlError: '**invalid url, must include http:// or https://'})
    }
  }

  componentDidMount() {
    if (window.location.hash !== '') {
      this.getRedirect()
    }
  }

  render() {
    let content;
    if (this.state.loggedIn === true) {
      content =
        <div className="logged-in-content">
          <div className="logged-in-header">
            <LogIn setLogIn={this.setLogIn} loggedIn={this.state.loggedIn} setUser={this.setUser} getAllUrls={this.getAllUrls} activeUserName={this.state.username}/>
          </div>
          <CreateUrl getAllUrls={this.getAllUrls} username={this.state.username} userid={this.state.userid}/>
          <h1>{this.state.username}'s urls:</h1>
          <ExistingUrlContainer urls={this.state.urls}/>
        </div>
    } else if (this.state.loggedIn === false) {
      let anonUrl
      if (this.state.anonUrlReturn.length !== 0) {
        anonUrl =
        <div>
          <p>You wont have access to this URL if you make another or navigate away. Make sure to copy it now!</p>
          <div className="original-url-container">
            <p>original url: <em>{this.state.anonUrlReturn.originalurl}</em></p>
          </div>
          <div className="short-url-container">
            <p>your short url: <strong>theoog.net/#{this.state.anonUrlReturn.id}</strong></p>
            <button onClick={() => navigator.clipboard.writeText(`theoog.net/#${this.state.anonUrlReturn.id}`)}>copy to clipboard</button>
          </div>
        </div>
      }
      let mobileNav
      if (this.state.mobileNavOpen === true) {
        mobileNav = 
          <div className="mobile-nav-open">
            <div className="mobile-nav-icon-container">
              <i className="fa fa-close" onClick={this.clickMobileNav}></i>
            </div>
            <Register setRegistered={this.setRegistered} registered={this.state.registered} setLogIn={this.setLogIn} setUser={this.setUser}/>
            <LogIn setLogIn={this.setLogIn} loggedIn={this.state.loggedIn} setUser={this.setUser} getAllUrls={this.getAllUrls} activeUserName={this.state.username}/>
          </div>
      } else if (this.state.mobileNavOpen === false) {
        mobileNav =
          <i className="fa fa-bars" onClick={this.clickMobileNav}></i>
      }
      content =
        <div className="logged-out-content">
          <div className="logged-out-header">
            <MediaQuery minDeviceWidth={500}>
              <div className="header-login-register">
                <Register setRegistered={this.setRegistered} registered={this.state.registered} setLogIn={this.setLogIn} setUser={this.setUser}/>
                <LogIn setLogIn={this.setLogIn} loggedIn={this.state.loggedIn} setUser={this.setUser} getAllUrls={this.getAllUrls} activeUserName={this.state.username}/>
              </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={500}>
              {mobileNav}
            </MediaQuery>
          </div>
          <img alt="" src="./images/the_oog.png"/>
          <p>The Oog is a URL shortener.</p>
          <p>Try it out!</p>
          <form>
          <input name="anonUrlSubmit" className="long-input" type="text" placeholder="paste your url here, http or https required" value={this.state.anonUrlSubmit} onChange={this.handleChange}/>
          <button onClick={this.submitAnon}>shorten</button>
          </form>
          <p className="url-validation-error">{this.state.urlError}</p>
          {anonUrl}
        </div>
    }

    return (
      <div className="App">
        {content}
        {/* <Footer /> */}
      </div>
    )
  }
}

export default App;