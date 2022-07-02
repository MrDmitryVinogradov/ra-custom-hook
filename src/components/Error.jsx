import React from 'react'
import useJsonFetch from './useJsonFetch'

function Error() {
  const error = useJsonFetch('http://localhost:7070/error')
  return (
    <div>
      {error}
    </div>
  )
}

export default Error