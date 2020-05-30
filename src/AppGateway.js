import React from 'react'
import App from './App'
import axios from 'axios'

const AppGateway = () => {

  const getRedirect = () => {
    const noHash = window.location.hash.substring(1)
    axios.get(`https://api.theoog.net/${noHash}`)
      .then((results) => {
        window.location.href = results.data[0].originalurl
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const directToAppOrRedirect = () => {
    if (window.location.hash !== '') {
      getRedirect()
      return (
        <div>you are being redirected</div>
      )
    } else if (window.location.hash === '') {
      return <App />
    }
  }

  return (
    <div>{directToAppOrRedirect()}</div>
  )
}

export default AppGateway