import { useState, useEffect } from 'react'
import  fetchDataFromApi  from './utils/api'

function App() {
  let MyObj=null;

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
