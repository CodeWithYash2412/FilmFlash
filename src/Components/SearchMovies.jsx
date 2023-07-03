import React from 'react'

const SearchMovies = ({searchValue, setSearchValue, handleSearchClear, searchTitle}) => {
    return (
        <div class="my-6 mx-24">
            <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> {searchTitle} </label>
            <div className='flex gap-4'>
                <input type="text" id="default-input" value={searchValue} onChange={(event => setSearchValue(event.target.value))} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                <button className='border border-gray-500  p-1 rounded-lg text-gray-500 w-fit px-[20px]' onClick={handleSearchClear}>Clear</button>
            </div>
            
        </div>
    )
}

export default SearchMovies