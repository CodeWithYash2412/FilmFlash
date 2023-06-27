import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const CollectionDetails = () => {

    const location = useLocation()
    const { colData } = location.state
    const [data, setData] = useState([])
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/collection/${colData}?api_key=68a69a694865c5c035f68ac8d602fd69`);
            const jsonData = await response.json();
            console.log(jsonData)
            setData(jsonData);
        } catch (error) {
            console.log('Error fetching data:', error);
        }


    };
    const { poster_path, name, overview, backdrop_path, parts } = data

    const url = `https://image.tmdb.org/t/p/w500${backdrop_path}`

    return (
        <div className='flex justify-center flex-col items-center'>
            <div className='w-[75%] h-1/2 my-20 p-3 flex justify-center items-center bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${url})` }}>
                <div className='text-center'>
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} className='mx-auto my-2 w-2/3 border-white border-4' alt="" />
                    <div className=' backdrop-brightness-50 backdrop-blur-md text-white m-2'>
                        <h1 className='text-center text-2xl font-bold'> {name} </h1>
                        <p> {overview} </p>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-4 mx-40 gap-3 m-5'>
                {parts && parts.map((item) => (
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={item.id }>
                        <a href="#">
                            { item.backdrop_path ? <img class="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt="" /> : <div className="w-full h-1/2 flex justify-center items-center p-2 text-white bg-[#FBAB7E] bg-[linear-gradient(62deg,#FBAB7E_0%,#F7CE68_100%)] mr-2 text-lg"> Image Not Available </div> }
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {item.title} </h5>
                            </a>
                            
                            
                        </div>
                        
                    </div>
                ))}

            </div>

            

        </div>
    )
}

export default CollectionDetails