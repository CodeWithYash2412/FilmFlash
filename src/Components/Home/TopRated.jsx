import React, { useState, useEffect } from 'react'
import HomeCard from '../HomeCard';

const TopRated = () => {
    const [data, setData] = useState([]);
    const [trending, setTrending] = useState("day")

    useEffect(() => {
        fetchData();
    }, [trending]);

    const handleChangeValue = (event) => {
        setTrending(event.target.value);
    }

    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/trending/all/${trending}?api_key=68a69a694865c5c035f68ac8d602fd69`);
            const jsonData = await response.json();
            var limitedData = jsonData.results.slice(0, 12);
            setData(limitedData);
        } catch (error) {
            console.log('Error fetching data:', error);
        }

    };
    
    return (
        <div className='flex justify-center'>
            <div className='w-[75%] p-5 '>
                <h2 className='text-2xl ml-24'>Trending Movie and Show</h2>
                <div className='ml-24 my-5'>

                    <select name="trending" id="trending" value={trending} onChange={handleChangeValue}>
                        <option value="day">Trending For Day</option>
                        <option value="week">Trending For Week</option>
                    </select>

                    

                </div>
                <div className='text-center'>
                    {data.map((item) => (
                        <HomeCard url={item.poster_path} title={item.title ? item.title : item.name} vote={item.vote_average} media={item.media_type} id={item.id} />
                    ))}
                </div>
            </div>
        </div> 
    )
}

export default TopRated

