import React from 'react'
import "./style.scss"
import DetailsBanner from './detailsBanner/DetailsBanner'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Cast from './cast/Cast'
import Similar from './similar/Similar'

const Details = () => {
  const {mediaType, id} = useParams();
  const {data, loading} =  useFetch(`/${mediaType}/${id}/videos`);
  const {data:credits, loading:creditsLoading} = useFetch(`/${mediaType}/${id}/credits`)


  return (
    <div className='details'>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}/>
      <Cast data={credits?.cast} loading={creditsLoading}/>
      <Similar mediaType={mediaType} id={id}/>
    </div>
  )
}

export default Details
