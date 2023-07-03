import React, { useState, useEffect } from 'react'
import HomeCard from '../HomeCard';
import SearchMovies from '../SearchMovies';



const AllMovies = () => {
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("all")
  const [title, setTitle] = useState("All")
  const [searchValue, setSearchValue] = useState("")
  const [language, setLanguage] = useState("")
  const [showLanguage, setShowLanguage] = useState(true)


  useEffect(() => {
    fetchData();

  }, [selectedOption, searchValue, language]);

  const handleSearchClear = () => {
    setSearchValue("");
    setLanguage("");
    setSelectedOption("all")
    setTitle("All")
    setShowLanguage(true)
  }



  var url = "";
  const fetchData = async () => {
    if (searchValue) {
      url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=68a69a694865c5c035f68ac8d602fd69`;
    } else if (selectedOption === "all" && language) {
      url = `https://api.themoviedb.org/3/discover/movie?api_key=68a69a694865c5c035f68ac8d602fd69&with_original_language=${language}`;
    } else if (selectedOption === "all") {
      url = `https://api.themoviedb.org/3/discover/movie?api_key=68a69a694865c5c035f68ac8d602fd69&include_adult=true`;
    } else {
      url = `https://api.themoviedb.org/3/movie/${selectedOption}?api_key=68a69a694865c5c035f68ac8d602fd69`
    }
    try {
      const response = await fetch(url);
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
      <div className='w-[75%] p-5 mt-10 '>

        <div className='mx-24'>
          <div className='flex justify-between'>
            <h3 class=" flex items-center mb-5 text-lg font-medium text-gray-900 dark:text-white">Filter the Movies</h3>
            {showLanguage && <div className='my-3 text-center inline-block'>
              <select name="language" id="language" className='bg-[#1d3557] text-white rounded-lg w-44' value={language} onChange={(event) => setLanguage(event.target.value)} >
                <option value="" className='bg-[#457b9d] '>Show All Movies</option>
                <option value="en" className='bg-[#457b9d] '>English</option>
                <option value="hi" className='bg-[#457b9d] '>Hindi - हिन्दी</option>
                <option value="gu" className='bg-[#457b9d] '>Gujarati - ગુજરાતી</option>
                <option value="sa" className='bg-[#457b9d] '>Sanskrit - संस्कृत</option>
                <option value="bn" className='bg-[#457b9d] '>Bengali - বাংলা</option>
                <option value="ks" className='bg-[#457b9d] '>Kashmiri</option>
                <option value="mr" className='bg-[#457b9d] '>Marathi - मराठी</option>
                <option value="ml" className='bg-[#457b9d] '>Malayalam - മലയാളം</option>
                <option value="pa" className='bg-[#457b9d] '>Punjabi - ਪੰਜਾਬੀ</option>
                <option value="ta" className='bg-[#457b9d] '>Tamil - தமிழ்</option>
                <option value="te" className='bg-[#457b9d] '>Telugu - తెలుగు</option>
                <option value="ja" className='bg-[#457b9d] '>Japanis - 日本</option>
                <option value="de" className='bg-[#457b9d] '>German - Deutsch</option>
                <option value="es" className='bg-[#457b9d] '>Spanish - Española</option>
                <option value="ko" className='bg-[#457b9d] '>Korean - 한국인</option>
                <option value="zh" className='bg-[#457b9d] '>Chinese - 中国人</option>
              </select>

            </div>}
          </div>
          <ul class="grid w-full gap-6 md:grid-cols-5">
            <li>
              <input type="radio" id="all" name="hosting" value="all" class="hidden peer" checked={selectedOption === "all"} onChange={(event) => { setSelectedOption(event.target.value); setTitle("All"); setShowLanguage(true) }} />
              <label for="all" class="inline-flex items-center justify-between w-full h-[36px] p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-blue-600 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div class="block">
                  <div class="w-full text-lg font-semibold">All</div>

                </div>

              </label>
            </li>
            <li>
              <input type="radio" id="now_playing" name="hosting" value="now_playing" class="hidden peer" checked={selectedOption === "now_playing"} onChange={(event) => { setSelectedOption(event.target.value); setTitle("Now Playing"); setShowLanguage(false) }} />
              <label for="now_playing" class="inline-flex items-center justify-between w-full h-[36px] p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-blue-600 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div class="block">
                  <div class="w-full text-lg font-semibold">Now Playing</div>

                </div>

              </label>
            </li>
            <li>
              <input type="radio" id="popular" name="hosting" value="popular" class="hidden peer" checked={selectedOption === "popular"} onChange={(event) => { setSelectedOption(event.target.value); setTitle("Popular"); setShowLanguage(false) }} />
              <label for="popular" class="inline-flex items-center justify-between w-full h-[36px] p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-blue-600 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div class="block">
                  <div class="w-full text-lg font-semibold">Popular</div>

                </div>

              </label>
            </li>
            <li>
              <input type="radio" id="top_rated" name="hosting" value="top_rated" class="hidden peer" checked={selectedOption === "top_rated"} onChange={(event) => { setSelectedOption(event.target.value); setTitle("Top Rated"); setShowLanguage(false) }} />
              <label for="top_rated" class="inline-flex items-center justify-between w-full h-[36px] p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-blue-600 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div class="block">
                  <div class="w-full text-lg font-semibold">Top Rated</div>

                </div>

              </label>
            </li>
            <li>
              <input type="radio" id="upcoming" name="hosting" value="upcoming" class="hidden peer" checked={selectedOption === "upcoming"} onChange={(event) => { setSelectedOption(event.target.value); setTitle("Upcoming"); setShowLanguage(false) }} />
              <label for="upcoming" class="inline-flex items-center justify-between w-full h-[36px] p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-blue-600 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div class="block">
                  <div class="w-full text-lg font-semibold">Upcoming</div>

                </div>

              </label>
            </li>
          </ul>


        </div>

        <SearchMovies searchValue={searchValue} setSearchValue={setSearchValue} handleSearchClear={handleSearchClear} searchTitle="Search Movie" />

        <h2 className='text-2xl ml-24 my-5'> {searchValue ? "Search Result for " + searchValue : title} </h2>
        <div className='text-center'>
          {data.map((item) => (
            <HomeCard url={item.poster_path} title={item.title} vote={item.vote_average} id={item.id} media='movie' />

          ))}
        </div>

      </div>
    </div>
  )
}

export default AllMovies


