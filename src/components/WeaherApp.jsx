import React, { useState, useEffect, useRef } from 'react';

export default function WeatherApp() {
    const [data, setData] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [city, setCity] = useState('Kolkata');
    const [input, setInput] = useState(city);
    const [bg, setBg] = useState('/sunny.jpg');
    // const bgRef = useRef(null);

    const updateBackground = (weatherData) => {
        if (weatherData) {
          console.log(weatherData.weather[0].description);
          if (weatherData.weather[0].description.includes('haze')) {
            setBg('/haze.jpg');
          } else if (weatherData.weather[0].description.includes('clouds')) {
            setBg('/cloudy.jpg');
          } else if (weatherData.weather[0].description.includes('mist')) {
            setBg('/mist.jpg');
          } else {
            setBg('/sunny.jpg');
          }
        }
    };

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=225a775387fbf186046e7c913d85603a`);

                if(!response.ok) {
                    throw new Error('Network response is not ok');
                }
                const result = await response.json();
                setData(result);
                updateBackground(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    },[city]);

    // useEffect(() => {
    //     if (data) {
    //       console.log(data.weather[0].description);
    //       if (data.weather[0].description.includes('haze')) {
    //         setBg('/haze.jpg');
    //       } else if (data.weather[0].description.includes('clouds')) {
    //         setBg('/cloudy.jpg');
    //       } else if (data.weather[0].description.includes('mist')) {
    //         setBg('/mist.jpg');
    //       } else {
    //         setBg('/sunny.jpg');
    //       }
    //     }
    //   }, [data]);

    if(loading) {
        return <p>Loading...</p>
    }
    if(error) {
        <p>Error:{error.message}</p>
    }

    // const changeBackground2 = () => {
    //     if (bgRef.current) {
    //         console.log(data.weather[0].description);
    //         if(data.weather[0].description === 'haze') {
    //             // setBg('/haze.jpg');
    //             bgRef.current.style.backgroundImage = "url('/haze.jpg')";
    //         } else if(data.weather[0].description === 'overcast clouds') {
    //             // setBg('/cloudy.jpg');
    //             bgRef.current.style.backgroundImage = "url('/cloudy.jpg')";
    //         } else if(data.weather[0].description === 'mist') {
    //             // setBg('/sunny.jpg');
    //             bgRef.current.style.backgroundImage = "url('/sunny.jpg')";
    //         }
            // console.log("Working");
            // bgRef.current.style.backgroundImage = "url('/cloudy.jpg')"; // Update with your new image URL
    //     }
    //   };
  return (
    <div className="h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${bg})`}}>
    {/* <div ref={bgRef}
    className="h-screen w-full bg-cover bg-center"
    style={{ backgroundImage: "url('/sunny.jpg')" }}> */}

    
    <div className='flex justify-center pt-40'>
        <div>
            <div className='mb-8 ml-16'>
                <input className='border font-medium w-56 h-8 p-2 m-4 rounded' onChange={(e) => {setInput(e.target.value)}} placeholder='Enter your city'/>
                <button className='bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 m-2 rounded' onClick={() => {setCity(input);}}>Search</button>
            </div> 
            <h1 className='text-5xl font-bold font-serif text-black'>Weather in {data.name}</h1>
            <br></br>
            {/* <h5 className='text-center text-2xl text-yellow-500'>Longitude {data.coord.lon}</h5> */}
            <p className='text-center text-2xl font-bold text-blue-500'>Temperature: {(data.main.temp - 273.15).toFixed(2)} °C</p>
            <h5 className='text-center font-serif text-2xl text-yellow-700'>Feels like: {(data.main.feels_like - 273.15).toFixed(2)} °C</h5>
            <h5 className='text-center font-sans text-2xl text-black'>Humidity: {data.main.humidity}%</h5>
            <h5 className='text-center font-bold text-2xl text-sky-700'>Wind: {data.wind.speed} km/h</h5>
            <br></br>
            <p className='text-center text-2xl text-black'>Weather: {data.weather[0].description}</p>
            {/* <p className='text-center text-2xl text-black'>id: {data.weather[0].id}</p> */}
        </div>
    </div>
    </div>
  )
}
