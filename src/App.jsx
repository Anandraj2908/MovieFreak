import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter,Routes, Route } from 'react-router-dom'

//import components
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import PageNotFound from "./pages/404/PageNotFound"
import Details from "./pages/details/Details"
import Explore from "./pages/explore/Explore"
import Home from "./pages/home/Home"
import SearchResult from './pages/searchResult/SearchResult'

function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:mediaType/:id" element={<Details/>}/>
      <Route path="/search/:query" element={<SearchResult/>}/>
      <Route path="/explore/:mediaType" element={<Explore/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
