import React, { useState, useEffect } from 'react';

export default function ApiFetch() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-06-09&sortBy=publishedAt&apiKey=f4119a5ed1fe481ca4f9564cd836f7a4&page=1');

                if(!response.ok) {
                    throw new Error('Network response is not ok');
                }
                const result = await response.json();
                const titlesArray = result.articles.map(article => article.title);
                setData(titlesArray);
                // setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    },[]);

    if(loading) {
        return <p>Loading...</p>
    }
    if(error) {
        <p>Error:{error.message}</p>
    }
  return (
    <div className='tex-center mt-12'>
        <h1 className='text-center text-5xl font-bold text-grey-900'>News Titles</h1>
        <ul className='list-decimal mt-12 ml-48'>
            {data.map((title, index) => (
                <li key={index} className='m-2'>{title}</li>
            ))}
        </ul>
    </div>
  )
}
