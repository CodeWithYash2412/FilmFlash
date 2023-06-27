import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet } from "react-router-dom"
import React from 'react'
import Home from './Pages/Home'
import Movies from './Pages/Movies'
import Series from './Pages/Series'
import Navbar from "./Components/Navbar"
import MovieDetails from "./Components/Movies/MovieDetails"
import SeriesDetails from "./Components/Series/SeriesDetails"
import CollectionDetails from "./Components/Movies/CollectionDetails"




const App = () => {
  const RootLayout = () => {
    return <>
      <Navbar/>
      <div>
        <Outlet/>
      </div>
  
    </>
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='movies' element={<Movies />} />
        <Route path='series' element={<Series />} />
        <Route path="movie/:name" element={<MovieDetails/>}/>
        <Route path="series/:name" element={<SeriesDetails/>}/>
        <Route path="movie/collection/:name" element={<CollectionDetails/>}/>
       
        
        
      </Route>
    )
  )

  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
  
  
  
}

export default App