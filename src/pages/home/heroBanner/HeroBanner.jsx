import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./style.scss"

import useFetch from '../../../hooks/useFetch';
import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

const HeroBanner = () => {

  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();
  const {url} = useSelector((state) =>state.home);
  const handelSubmit = () => {
    if(searchInput.length>0){
      navigate(`/search/${searchInput}`)
    }
  }

  //background image
  const {data, loading} = useFetch("/movie/upcoming")
  const [backgroundUrl, setBackgroundUrl] = useState("");
  useEffect( () => {
    if(data?.results)
    setBackgroundUrl(url.backdrop+data?.results?.[Math.floor(Math.random()*20)].backdrop_path)
  console.log(backgroundUrl)
  }, [data])


  return (
    <div className='heroBanner '>

      {!loading &&
        <div className="backdrop-img ">
          <Img src={backgroundUrl} className="object-cover"/>
        </div>
      }
      <div className="opacity-layer"></div>
      <ContentWrapper className="wrapper ">
        <div className="heroBannerContent">
          <span className='font-sans text-8xl'>Welcome</span>
          <span>
            Millions of movies, TV shows and people to discover.
            Explore now.
          </span>
          <form className='searchInput' onSubmit={handelSubmit}>
            <input
            type='text'
            onChange={(e)=>{setSearchInput(e.target.value)}}
            placeholder='Search for a movie or tv show....'
            />
            <button type='submit'>Search</button>

          </form>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default HeroBanner
