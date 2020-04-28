import React from 'react'
import './register.css'

const Register = ({ registered, setRegistered }) => {
  if (registered === true) {
    return (
      <button onClick={() => setRegistered()}>register</button>
    )
  } else if (registered === false) {
    return(
      <div>
        <form>
          <label>
            Register:
            <input name="username" type="text"/>
            <input name="password" type="password"/>
            <input name="confirm-password" type="password"/>
            <input type="submit"/>
            <button onClick={() => setRegistered()}>cancel</button>
          </label>
        </form>
      </div>
    )
  }
}

export default Register