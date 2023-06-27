import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomeCard = ({ url, title, vote, media, id}) => {

    const navigate = useNavigate()
    const handleButtonClick = () => {
        const data = id;
        
        if (media == "movie"){

            navigate(`/movie/${title}`, {state: { data }});
        } else {
            navigate(`/series/${title}`,{state: {data}});
        }
        
    };

    return (
        <>
            {url && title && (
                <div className=' w-52 relative group m-3 inline-block'>
                    <img src={`https://image.tmdb.org/t/p/w500${url}`} className=' rounded-md group-hover:rounded-2xl' alt={title} />
                    <div className='absolute top-0 left-0 w-full h-full z-10 flex justify-end items-end'>
                        {media && <h3 className='text-black border-green-500 border-4 bg-white m-3 rounded-full p-4 w-[34%] h-[10%] flex justify-center items-center text-center '>
                            {media}
                        </h3>}
                        <h3 className='text-black border-green-500 border-4 bg-white m-3 rounded-full p-4 w-[34%] h-[10%] flex justify-center items-center text-center '>
                            {vote}<p className=' text-[10px]'>/10</p>
                        </h3>
                    </div>
                    <div className="absolute bg-transparent backdrop-blur-sm backdrop-brightness-50 z-10 top-0 left-0 h-full w-full hidden transition-all duration-500 group-hover:flex group-hover:flex-col group-hover:gap-y-3 group-hover:justify-center group-hover:items-center group-hover:cursor-pointer group-hover:rounded-2xl">
                        <div className='h-full flex justify-center items-end p-2'>
                            <h4 className='text-white text-xl text-center'>{title}</h4>
                        </div>
                        <div className='h-full flex justify-center items-end'>
                            <button onClick={handleButtonClick} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    See More
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default HomeCard