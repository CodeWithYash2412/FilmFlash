import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


const MovieDetails = () => {
  const [movieData, setMovieData] = useState([]);
  const location = useLocation();
  const { data } = location.state;
  const imdbid = movieData.imdb_id
  const [crew, setCrew] = useState([])
  const [video, setVideo] = useState([])
  const [provider, setProvider] = useState([])

  useEffect(() => {
    fetchData();
  }, [imdbid]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${data}?api_key=68a69a694865c5c035f68ac8d602fd69`);
      const jsonData = await response.json();
      setMovieData(jsonData);

      const response2 = await fetch(`https://api.themoviedb.org/3/movie/${imdbid}/credits?api_key=68a69a694865c5c035f68ac8d602fd69`);
      const jsonData2 = await response2.json();
      setCrew(jsonData2.cast)

      const response3 = await fetch(`https://api.themoviedb.org/3/movie/${data}/videos?api_key=68a69a694865c5c035f68ac8d602fd69`);
      const jsonData3 = await response3.json();
      setVideo(jsonData3.results);

      const response4 = await fetch(`https://api.themoviedb.org/3/movie/${data}/watch/providers?api_key=68a69a694865c5c035f68ac8d602fd69`);
      const jsonData4 = await response4.json();
      setProvider(jsonData4.results.BR.flatrate);



    } catch (error) {
      console.log('Error fetching data:', error);
    }



  };
  const navigate = useNavigate()
  const handleClick = (colData) => {
    navigate(`/movie/collection/${data}`, { state: { colData } });
  }


  console.log(`https://api.themoviedb.org/3/movie/${data}/videos?api_key=68a69a694865c5c035f68ac8d602fd69`)
  console.log(`https://api.themoviedb.org/3/movie/${data}/watch/providers?api_key=68a69a694865c5c035f68ac8d602fd69`)

  const { backdrop_path, status, vote_average, vote_count, poster_path, title, release_date, original_title, genres, tagline, overview, production_companies, belongs_to_collection, runtime } = movieData

  console.log(movieData);


  const bgurl = `https://image.tmdb.org/t/p/w500${backdrop_path}`;

  return (
    <>
      <div className='w-full '>
        <div className='w-full heightBG flex bg-no-repeat' style={{ backgroundImage: `url(${bgurl})` }}>
          <div className='flex h-full justify-center items-center w-1/3 mt-8'>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className='h-[80%] rounded-xl box m-5' alt="" />
          </div>
          <div className='w-2/3 h-full flex justify-center items-center mt-8'>

            <div className=' p-3 w-full h-[80%] text-black bg-white rounded-lg  m-10 text-md gap-5 flex items-center'>
              <div>
                <h1 className='text-2xl font-bold'> {title}<span className='text-lg'>({release_date})</span> </h1>
                <p> <span>{genres && genres.map((genre) => <span key={genre.id}>{genre.name}  </span>)} <p className='mx-1.5 bg-black w-1 h-1 rounded-full inline-block'></p> {runtime} Minutes</span> </p>
                <div class="flex items-center">
                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white"> {vote_average} </p>
                  <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                  <a href="" class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{vote_count} reviews</a>
                </div>
                <p className='my-2 italic font-bold text-gray-500'> {tagline} </p>
                <div>
                  <h1 className='text-xl text-bold'>Description:</h1>
                  <p> {overview} </p>
                </div>
                <h1 className='font-bold'> {status} </h1>
              </div>
            </div>
          </div>
        </div>

        {production_companies && production_companies.length > 0 && <><h1 className='text-2xl m-5 text-center'>Production Companies</h1>
          <div className="flex items-center justify-evenly h-1/3 m-5">
            {production_companies && production_companies.map((company) => (
              <div key={company.id} className="flex items-center flex-col w-1/4 h-full justify-center relative" >
                {company.logo_path ? (
                  <img src={`https://image.tmdb.org/t/p/w200/${company.logo_path}`} alt={company.name} className="h-10 mr-2" />
                ) : (
                  <div className="w-fit h-8 flex justify-center items-center p-2 text-white bg-[#FBAB7E] bg-[linear-gradient(62deg,#FBAB7E_0%,#F7CE68_100%)] mr-2 text-sm"> {company.name}  </div>
                )}

              </div>
            ))}
          </div></>}

        {video && video.length > 0 && <div className='mt-20'>
          {video && video.length > 0 && <h1 className='text-2xl mt-5 text-center'>Videos</h1>}
          {video && video.length > 0 && (
            <div className="mx-24 mt-5 overflow-x-auto scrollbar-hide">
              <div className="flex flex-nowrap">
                {video.map((video) => (
                  <>
                    <div className='m-2'>
                      <iframe width="300" height="200" src={`https://www.youtube.com/embed/${video.key}`} title={video.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                      <h1 className='text-center text-xl m-2'> {video.type} </h1>
                    </div>
                  </>

                ))}
              </div>
            </div>
          )}
        </div>}


        {provider && provider.length > 0 && <h1 className='text-2xl m-5 text-center'>Where to Watch</h1>}
        <div className="flex items-center justify-evenly h-1/3 m-5">
          {provider && provider.map((provide) => (
            <>
              <div key={provide.provider_id} className="flex items-center flex-col w-1/4 h-full  relative" >
                {provider.logo_path ? (
                  <img src={`https://image.tmdb.org/t/p/w200/${provider.logo_path}`} alt={provide.provider_name} className="h-10 mr-2" />
                ) : (
                  <div className="w-fit h-8 flex justify-center items-center p-2 text-white bg-[#FBAB7E] bg-[linear-gradient(62deg,#FBAB7E_0%,#F7CE68_100%)] mr-2 text-sm"> {provide.provider_name} </div>
                )}

              </div>
            </>
          ))}
        </div>

        {belongs_to_collection && (
          <div className='mt-5'>

            <div className='relative flex w-full justify-center '>
              {belongs_to_collection.backdrop_path ? (
                <img src={`https://image.tmdb.org/t/p/original/${belongs_to_collection.backdrop_path}`} alt={belongs_to_collection.name} className=' brightness-50 bg-cover bg-center w-full h-[35rem] ' />
              ) : (
                <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt={belongs_to_collection.name} className=' brightness-50 bg-cover bg-center w-full h-[35rem] ' />
              )}
              <div className='absolute gap-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white backdrop-blur-xl w-1/2 h-1/2 flex justify-center items-center flex-col'>
                <h2 className='text-2xl'> {belongs_to_collection.name} </h2>
                <button onClick={() => handleClick(belongs_to_collection.id)} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Go To Collection
                  </span>
                </button>
              </div>
            </div>

          </div>
        )}

        {crew && crew.length > 0 && <div className='mt-20'>
          {crew && <h1 className='text-2xl m-5 text-center'>Cast of the Film</h1>}

          <div className='mx-24 grid grid-cols-[repeat(5,1fr)] gap-2.5'>
            {crew && crew.map((crew) => (
              crew.profile_path && (
                <div class="max-w-sm bg-white flex items-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className='flex justify-center'>
                    <a href="#">
                      <img class="rounded-lg m-2" width={60} src={`https://image.tmdb.org/t/p/original${crew.profile_path}`} alt="" />
                    </a>
                  </div>
                  <div class="p-5">
                    <h2 className='text-center text-blue-900 font-bold'> {crew.character} </h2>
                    <h2 className='text-center  font-bold'> {crew.name} </h2>

                  </div>
                </div>
              )
            ))}
          </div>
        </div>}



      </div>
    </>
  )
}

export default MovieDetails



// <h3>Original Title: {original_title}</h3>
//               <h3>Title: {title} </h3>
//               <h3>Tagline: {tagline} </h3>
//               <h3 className='flex'>Genres:&nbsp; <div>{genres && genres.map((genre) => <span key={genre.id}>{genre.name} &nbsp; </span>)}</div></h3>
//               <h3>Description: {overview} </h3>