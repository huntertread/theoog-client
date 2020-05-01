import React from 'react'
import './individualurl.css'

const IndividualUrl = ({ urlproperties }) => {
  return(
    <div>
      <p>{urlproperties.originalurl}</p>
      <p>localhost:3000/#{urlproperties.shorturl}</p>
      <p>{urlproperties.urlnickname}</p>
      <button>copy to clipboard</button>
    </div>
  )
}

export default IndividualUrl