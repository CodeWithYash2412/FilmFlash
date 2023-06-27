import React, { useState, useEffect } from 'react'
import HomeCard from '../HomeCard'
import SearchMovies from '../SearchMovies'

const SearchHome = () => {
    const [data, setData] = useState([])
    const [searchData, setSearchData] = useState("")
    useEffect(() => {
        fetchData();
    }, [searchData]);

    const handleSearchClear = () => {
        setSearchValue("");
    }


    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${searchData}&api_key=68a69a694865c5c035f68ac8d602fd69`);
            const jsonData = await response.json();
            const limitedData = jsonData.results.slice(0, 8);
            setData(limitedData);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
        

    };
   
    return (
        <div className='flex justify-center'>
            <div className='w-[75%] p-5 mt-10 '>
                
                <SearchMovies searchValue={searchData} setSearchValue={setSearchData} handleSearchClear={handleSearchClear} searchTitle="Search Movies or Series" />
                <div className='text-center'>
                    {data.map((item) => (
                        <HomeCard url={item.poster_path} title={item.title} vote={item.vote_average} id={item.id} imdbId={item.imdb_id} media="movie" />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SearchHome