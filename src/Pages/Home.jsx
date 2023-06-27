import React from 'react'
import CurrentlyMovie from '../Components/Home/CurrentlyMovie'
import CurrentlySeries from '../Components/Home/CurrentlySeries'
import TopRated from '../Components/Home/TopRated'
import SearchHome from '../Components/Home/SearchHome'


const Home = () => {
    return (
        <>
            <SearchHome/>
            <CurrentlyMovie />
            <CurrentlySeries />
            <TopRated />
        </>
    )
}

export default Home