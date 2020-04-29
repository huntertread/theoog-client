import React from 'react'
import './existingurlcontainer.css'
import IndividualUrl from '../IndividualUrl/IndividualUrl.js'

const ExistingUrlContainer = ({ urls }) => {
  return(
    <div className="existing-url-container">
      {
        urls.map((urlproperties, i) => <IndividualUrl key={i} urlproperties={urlproperties} />)
      }
    </div>
  )
}

export default ExistingUrlContainer