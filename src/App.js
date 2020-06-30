import React from 'react'
import LogIn from './components/LogIn/LogIn'
import Register from './components/Register/Register'
import CreateUrl from './components/CreateUrl/CreateUrl'
import ExistingUrlContainer from './components/ExistingUrl/ExistingUrlContainer/ExistingUrlContainer'
import MediaQuery from 'react-responsive'
import axios from 'axios'
import { connect } from 'react-redux'
import { setLoggedInState, setUserName, setUserId, setRegisteredState, setMobileNavState } from './redux/user/user.action'
import { selectUserLogInState, selectUserName, selectUserId, selectRegisteredState, selectMobileNavState } from './redux/user/user.selector'
import { setAnonUrlSubmit, setUrlError, setAnonUrlReturn, setUserUrls, setUrlOwner, setOriginalUrl, setCreateError } from './redux/url/url.action'
import { selectAnonUrlSubmit,selectUrlError, selectAnonUrlReturn, selectUserUrls, selectUrlOwner, selectOriginalUrl, selectCreateError } from './redux/url/url.selector'
import './App.css'

const App = (props) => {
  const setLogIn = () => {
    props.setLoggedInState(!props.selectUserLogInState)
  };

  const setRegistered = () => {
    if (props.selectMobileNavState === false) {
      props.setMobileNavState(!props.selectMobileNavState)
    }
    props.setRegisteredState(!props.selectRegisteredState)
  }

  const setUser = (username, userid) => {
    props.setUserName(`${username}`)
    props.setUserId(`${userid}`)
    console.log(props.selectUserName)
    console.log(props.selectUserId)
  }

  const getUserUrls = () => {
    axios.get(`https://api.theoog.net/getallurls/${props.selectUserId}`)
      .then((response) => {
        console.log('get user urls response data: ', response.data)
        console.log("user urls", props.selectUserUrls)
        props.setUserUrls(response.data.reverse())
        console.log("user urls", props.selectUserUrls)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const handleChange = (event) => {
    props.setAnonUrlSubmit(event.target.value)
  }

  const checkValidUrl = (url) => {
    const regex = RegExp('((https|http)://)((\\w|-)+)(([.]|[/])((\\w|-)+))+')
    const passCheck = regex.test(url)
    if (passCheck === true) {
      return passCheck
    } else {
      return false
    }
  }

  const clickMobileNav = () => {
    props.setMobileNavState(props.selectMobileNavState)
  }

  const submitAnon = (event) => {
    event.preventDefault()
    if (checkValidUrl(props.selectAnonUrlSubmit)) {
      axios.post('https://api.theoog.net/', {
        owner: props.selectUserid, // defaults to user 'anon'
        originalurl: props.selectAnonUrlSubmit
      })
      .then((response) => {
        props.setAnonUrlReturn(response.data[0])
        props.setUrlError('')
      })
    } else {
      props.setUrlError('**invalid url, must include http:// or https://')
    }
  }

  let loggedInContent = () => (
    <div className="logged-in-content" test-data="logged-in-content">
      <div className="logged-in-header">
        <LogIn setLogIn={setLogIn} loggedIn={props.selectUserLogInState} setUser={setUser} getUserUrls={getUserUrls} activeUserName={props.selectUserName}/>
      </div>
      <CreateUrl getUserUrls={getUserUrls} username={props.selectUserName} userid={props.selectUserId}/>
      <h1>{props.selectUserName}'s urls:</h1>
      <ExistingUrlContainer urls={props.selectUserUrls}/>
    </div>
  );
  const loggedOutContent = () => {
    const anonUrl = (
      <div>
        <p>You wont have access to this URL if you make another or navigate away. Make sure to copy it now!</p>
        <div className="original-url-container">
          <p>original url: <em>{props.selectAnonUrlReturn.originalurl}</em></p>
        </div>
        <div className="short-url-container">
          <p>your short url: <strong>theoog.net/#{props.selectAnonUrlReturn.id}</strong></p>
          <button onClick={() => navigator.clipboard.writeText(`theoog.net/#${props.selectAnonUrlReturn.id}`)}>copy to clipboard</button>
        </div>
      </div>
    );
    const mobileNav = () => {
      return props.selectMobileNavState === true ? (
        // nav is open
        <div className="mobile-nav-open">
          <div className="mobile-nav-icon-container">
            <i className="fa fa-close" onClick={clickMobileNav}></i>
          </div>
          <Register setRegistered={setRegistered} registered={props.selectRegisteredState} setLogIn={setLogIn} setUser={setUser}/>
          <LogIn setLogIn={setLogIn} loggedIn={props.selectUserLogInState} setUser={setUser} getUserUrls={getUserUrls} activeUserName={props.selectUserName}/>
        </div>
      ) : (
        // nav is closed
        <i className="fa fa-bars" onClick={clickMobileNav}></i>
      )
    };
    return (
      <div className="logged-out-content">
        <div className="logged-out-header">
          <MediaQuery minDeviceWidth={500}>
            <div className="header-login-register">
              <Register setRegistered={setRegistered} registered={props.selectRegisteredState} setLogIn={setLogIn} setUser={setUser}/>
              <LogIn setLogIn={setLogIn} loggedIn={props.selectUserLogInState} setUser={setUser} getUserUrls={getUserUrls} activeUserName={props.selectUserName}/>
            </div>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={500}>
            {mobileNav()}
          </MediaQuery>
        </div>
        <img alt="" src="./images/the_oog.png"/>
        <p>The Oog is a URL shortener</p>
        <p>Try it out below or <span className="create-an-account-text" onClick={setRegistered}>create an account</span> to have permanent access to your shortened URLs</p>
        <form>
          <input name="anonUrlSubmit" className="long-input" type="text" placeholder="paste your url here, http or https required" value={props.selectAnonUrlSubmit} onChange={handleChange}/>
          <button onClick={submitAnon}>shorten</button>
        </form>
        <p className="url-validation-error">{props.selectUrlError}</p>
        {/* logged out, url has been shortened and returned */}
        {props.selectAnonUrlReturn.length !== 0  ? anonUrl : null}
      </div>
    )
  }
  return (
    <div className="App">
      {props.selectUserLogInState === true ? loggedInContent() : loggedOutContent()}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    selectUserLogInState:  selectUserLogInState(state),
    selectUserName: selectUserName(state),
    selectUserId: selectUserId(state),
    selectRegisteredState: selectRegisteredState(state),
    selectMobileNavState: selectMobileNavState(state),
    selectAnonUrlSubmit: selectAnonUrlSubmit(state), 
    selectUrlError: selectUrlError(state),
    selectAnonUrlReturn: selectAnonUrlReturn(state),
    selectUserUrls: selectUserUrls(state),
    selectUrlOwner: selectUrlOwner(state),
    selectOriginalUrl: selectOriginalUrl(state),
    selectCreateError: selectCreateError(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoggedInState: render => dispatch(setLoggedInState(render)),
    setUserName: render => dispatch(setUserName(render)),
    setUserId: render => dispatch(setUserId(render)),
    setRegisteredState: render => dispatch(setRegisteredState(render)),
    setMobileNavState: render => dispatch(setMobileNavState(render)),
    setAnonUrlSubmit: render => dispatch(setAnonUrlSubmit(render)),
    setUrlError: render => dispatch(setUrlError(render)),
    setAnonUrlReturn: render => dispatch(setAnonUrlReturn(render)),
    setUserUrls: render => dispatch(setUserUrls(render)),
    setUrlOwner: render => dispatch(setUrlOwner(render)),
    setOriginalUrl: render => dispatch(setOriginalUrl(render)),
    setCreateError: render => dispatch(setCreateError(render))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
