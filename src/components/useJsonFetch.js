import React, {useEffect, useState} from 'react'

function useJsonFetch(url, opts) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response.text()
          .then((err) => {
          throw err
        }) 
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(JSON.parse(err));
        setLoading(false)
    })
  }, [])
  return [data, loading, error]
}

export default useJsonFetch
