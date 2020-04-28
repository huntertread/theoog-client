import React from 'react'
import './login.css'

const LogIn = ({loggedIn, setLogIn}) => {

  if (loggedIn === false) {
    return(
      <div>
        <form>
          <label>
            log-in:
            <input name="username" type="text"/>
            <input name="password" type="password"/>
            <button onClick={() => setLogIn()}>log in</button>
          </label>
        </form>
      </div>
    )
  } else if (loggedIn === true) {
    return(
      <div>
        <h1>Welcome Back UN!</h1>
        <button onClick={() => setLogIn()}>log out</button>
      </div>
    )
  }
}

export default LogIn