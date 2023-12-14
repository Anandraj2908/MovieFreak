import React from 'react'
import "./style.scss"
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useSelector } from 'react-redux';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import Card from './card/Card';

const Explore = () => {
  const {mediaType} = useParams();
  const {data, loading } = useFetch(`/discover/${mediaType}`);
  const {url} = useSelector((state)=> state.home)
  let title = "Movies"
  if(mediaType != "movie"){
    title="TV Shows"
  } 
  console.log(data)
  return (
    <div className='searchContainer'>
      <ContentWrapper className="contentWrapper">
        <div className="title">{title}</div>
        <div className="resultsCards">
          {!loading && data?.results.map((item) => {
            if(item.backdrop_path){
              return(
                <Card item={item} imageUrl={url.backdrop+item.backdrop_path} media_type={mediaType} />
              )
            }
            
          })}
        </div>
      </ContentWrapper>
    </div>
  )
}

export default Explore
