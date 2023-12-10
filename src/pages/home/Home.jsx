import React from 'react'
import "./style.scss";

import HeroBanner from "./heroBanner/HeroBanner"
import Trending from './trending/Trending';
import Carousel from './carousel/Carousel';

const Home = () => {
  return (
    <div className='homePage '>
      <HeroBanner/>
      <Carousel title={"Trending"} endpoints={["day","week"]}/>
      
      
    </div>
  )
}

export default Home
