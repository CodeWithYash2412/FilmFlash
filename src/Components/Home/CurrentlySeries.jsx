import React, { useState, useEffect } from 'react'
import HomeCard from '../HomeCard';

const CurrentlySeries = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=68a69a694865c5c035f68ac8d602fd69');
            const jsonData = await response.json();
            var limitedData = jsonData.results.slice(0, 8);
            setData(limitedData);
        } catch (error) {
            console.log('Error fetching data:', error);
        }

        
    };
    return (
        <div className='flex justify-center '>
            <div className='w-[75%] p-5 '>
                <h2 className='text-2xl ml-24'>Currently Airing Series</h2>
                <div className='text-center'>
                    {data.map((item) => (
                        <HomeCard url={item.poster_path} title={item.name} vote={item.vote_average} id={item.id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CurrentlySeries