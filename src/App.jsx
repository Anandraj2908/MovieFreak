import { useState, useEffect } from 'react'
import  fetchDataFromApi  from './utils/api'

function App() {

  const apiTest = () => {
    const res = fetchDataFromApi('/movie/popular').then(
      (res) => res.json()
    ).then((data) => {
      console.log(data)
    }).catch((error) => {
      return error
    })
  }

  useEffect( () => {
    apiTest()
  }, [])
  return (
    <>
      
        <h1>Hello</h1>

    </>
  )
}

export default App
