import React from 'react'
import useJsonFetch from './useJsonFetch'

function Data() {
  const data = useJsonFetch('http://localhost:7070/data')
  return (
    <div>
      {data}
    </div>
  )
}

export default Data
