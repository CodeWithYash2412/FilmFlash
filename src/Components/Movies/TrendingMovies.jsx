import React, { useState, useEffect } from 'react'
import HomeCard from '../HomeCard';



const TrendingMovies = () => {
    const [data, setData] = useState([]);
    const [time_window, setTime_window] = useState("day")


    useEffect(() => {
        fetchData();

    }, [time_window]);



    
    const fetchData = async () => {
        
        try {
            const response = await fetch(`https://api.themoviedb.org/3/trending/movie/${time_window}?api_key=68a69a694865c5c035f68ac8d602fd69`);
            const jsonData = await response.json();
            console.log(jsonData)
            setData(jsonData.results);
        } catch (error) {
            console.log('Error fetching data:', error);
        }

        console.log(data);
    };
    return (
        <div className='flex justify-center'>
            <div className='w-[75%] p-5 '>
                <h2 className='text-2xl ml-24 my-5'> Trending Movies </h2>
                <div className='flex mx-24 gap-5'>
                    <div class="flex items-center px-4 border border-gray-200 rounded dark:border-gray-700">
                        <input id="bordered-radio-1" type="radio" value="day" checked={time_window === "day"} onChange={(event) => setTime_window(event.target.value)} name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="bordered-radio-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Trending For Day</label>
                    </div>
                    <div class="flex items-center px-4 border border-gray-200 rounded dark:border-gray-700">
                        <input id="bordered-radio-2" type="radio" value="week" checked={time_window === "week"} onChange={(event) => setTime_window(event.target.value)} name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="bordered-radio-2" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Trending For Week</label>
                    </div>
                </div>
                <div className='text-center'>
                    {data.map((item) => (
                        <HomeCard url={item.poster_path} title={item.title} vote={item.vote_average} id={item.id} media="movie" />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default TrendingMovies
