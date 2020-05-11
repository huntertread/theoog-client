import React from 'react'
import './individualurl.css'

const IndividualUrl = ({ urlproperties }) => {
  return(
    <div className="individual-url">
      <div className="original-url-container">
        <p>original url: <em>{urlproperties.originalurl}</em></p>
      </div>
      <div className="short-url-container">
        <p>short url: <strong>theoog.net/#{urlproperties.id}</strong></p>
        {/* <p>{urlproperties.urlnickname}</p> */}
        <button className="copy-button" onClick={() => navigator.clipboard.writeText(`theoog.net/#${urlproperties.id}`)}>copy to clipboard</button>
      </div>
    </div>
  )
}

export default IndividualUrl