import React from 'react'
import './individualurl.css'

const IndividualUrl = ({ urlproperties }) => {
  return(
    <div>
      <p>{urlproperties.owner}</p>
      <p>{urlproperties.originalurl}</p>
      <p>{urlproperties.shorturl}</p>
      <p>{urlproperties.urlnickname}</p>
    </div>
  )
}

export default IndividualUrl