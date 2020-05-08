import React from 'react'
import './individualurl.css'

const IndividualUrl = ({ urlproperties }) => {
  return(
    <div className="individual-url">
      <div className="original-url-container">
        <p>original url: <em>{urlproperties.originalurl}</em></p>
      </div>
      <p>short url: <strong>theoog.net/#{urlproperties.id}</strong></p>
      {/* <p>{urlproperties.urlnickname}</p> */}
      <button onClick={() => navigator.clipboard.writeText(`theoog.net/#${urlproperties.id}`)}>copy to clipboard</button>
    </div>
  )
}

export default IndividualUrl