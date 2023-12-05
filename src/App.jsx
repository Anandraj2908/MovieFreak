import { useState, useEffect } from 'react'
import  fetchDataFromApi  from './utils/api'
import { useSelector, useDispatch } from 'react-redux'

//import components
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import PageNotFound from "./pages/404/PageNotFound"
import Details from "./pages/details/Details"
import Explore from "./pages/explore/Explore"
import Home from "./pages/home/Home"
import SearchResult from './pages/searchResult/SearchResult'

function App() {
  const dispatch = useDispatch();


  const apiTest = () => {
    fetchDataFromApi('/movie/popular').then(
      (res) => res.json()
    ).then((data) => {
      return data
    }).catch((error) => {
      return error
    })
  }

  useEffect( () => {
    apiTest()
  }, [])
  return (
    <>
      
        <pre>Hello</pre>

    </>
  )
}

export default App
