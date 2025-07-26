import React from 'react'

const Song = ({params} : {params: {id: string}}) => {
  return (
    <div>
      <h1>Song Details</h1>
      <p>Song ID: {params.id}</p>
    </div>
  )
}

export default Song
