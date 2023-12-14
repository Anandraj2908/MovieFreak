import React from 'react'
import "./style.scss"
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Card from "./card/Card"
import { useSelector } from 'react-redux'

const SearchResult = () => {
  const {query} = useParams();
  const {data, loading } = useFetch(`/search/multi?query=${query}`);
  const {url} = useSelector((state)=> state.home)

  return (
    <div className='searchContainer'>
      <ContentWrapper className="contentWrapper">
        <div className="title">Search results of '{query}'</div>
        <div className="resultsCards">
          {!loading && data?.results.map((item) => {
            if(item.media_type === "movie" || item.media_type === "tv")
            return(
              <Card item={item} imageUrl={url.backdrop+item.backdrop_path}  />
            )
          })}
        </div>
      </ContentWrapper>
    </div>
  )
}

export default SearchResult
