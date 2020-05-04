import React from 'react'
import './individualurl.css'

const IndividualUrl = ({ urlproperties }) => {
  return(
    <div className="individual-url">
      <p>original url: {urlproperties.originalurl}</p>
      <p>short url: <strong>localhost:3000/#{urlproperties.id}</strong></p>
      {/* <p>{urlproperties.urlnickname}</p> */}
      <button onClick={() => navigator.clipboard.writeText(`localhost:3000/#${urlproperties.id}`)}>copy to clipboard</button>
    </div>
  )
}

export default IndividualUrl