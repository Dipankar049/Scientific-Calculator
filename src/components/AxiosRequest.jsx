import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function AxiosRequest() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://newsapi.org/v2/everything?q=tesla&from=2024-06-09&sortBy=publishedAt&apiKey=f4119a5ed1fe481ca4f9564cd836f7a4&page=1')
        .then(response => {
            setData(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
            setLoading(false);
        });
    },[])

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Data fetched with Axios:</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <p className='font-bold'>{data.articles[0].title}</p>
        </div>
      )}
    </div>
  )
}
