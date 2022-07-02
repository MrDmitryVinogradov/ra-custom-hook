import React from 'react'
import useJsonFetch from './useJsonFetch'

function Loading() {
  const loading = useJsonFetch('http://localhost:7070/error')
  return (
    <div>
      {loading}
    </div>
  )
}

export default Error