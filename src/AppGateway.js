import React from 'react'
import App from './App'
import axios from 'axios'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const AppGateway = () => {

  const getRedirect = () => {
    const noHash = window.location.hash.substring(1)
    axios.get(`https://api.theoog.net/url/${noHash}`)
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
        <div id="redirect-message">you are being redirected</div>
      )
    } else if (window.location.hash === '') {
      return (
        <div>
          <Provider store={store}>
            <App />
          </Provider>
        </div>
      )
    }
  }

  return (
    <div>{directToAppOrRedirect()}</div>
  )
}

export default AppGateway