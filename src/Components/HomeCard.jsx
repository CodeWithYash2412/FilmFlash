import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomeCard = ({ url, title, vote, media, id }) => {

    const navigate = useNavigate()
    const handleButtonClick = () => {
        const data = id;

        if (media == "movie") {

            navigate(`/movie/${title}`, { state: { data } });
        } else {
            navigate(`/series/${title}`, { state: { data } });
        }

    };

    return (
        <>
            {url && title && (
                <div className=' w-52 relative group m-3 inline-block '>
                    <img src={`https://image.tmdb.org/t/p/w500${url}`} className=' rounded-md group-hover:rounded-2xl' alt={title} />
                    <div className='absolute top-0 left-0 w-full h-full z-10 flex justify-end items-end'>
                        {/* {media && <h3 className='text-black border-blue-500 border-4 bg-white m-3 rounded-full p-4 w-[34%] h-[10%] flex justify-center items-center text-center '>
                            {media}
                        </h3>} */}
                        <h3 className='flex gap-2 text-white mr-3 mb-3 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star-filled w-[12px] h-[12px]" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" stroke-width="0" fill="#ffffff"></path>
                            </svg>
                            {vote}
                        </h3>

                    </div>
                    <div className="absolute bg-transparent backdrop-blur-sm backdrop-brightness-50 z-10 top-0 left-0 h-full w-full hidden transition-all duration-500 group-hover:flex group-hover:flex-col group-hover:gap-y-3 group-hover:justify-center group-hover:items-center group-hover:cursor-pointer group-hover:rounded-2xl">
                        <div className='h-full flex justify-center items-end p-2'>
                            <h4 className='text-white text-xl text-center'>{title}</h4>
                        </div>
                        <div className='h-full flex justify-center items-end'>
                            <button onClick={handleButtonClick} class="relative inline-flex items-center justify-center p-0.5 mb-4 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    See More
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="absolute rounded-md bg-transparent bg-gradient-to-t from-gray-800   z-5 top-0 left-0 h-full w-full  transition-all duration-500 group-hover:flex group-hover:flex-col group-hover:gap-y-3 group-hover:justify-center group-hover:items-center group-hover:cursor-pointer group-hover:rounded-2xl">
                    </div>
                </div>
            )}
        </>
    )
}

export default HomeCard