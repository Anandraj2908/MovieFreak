import React from 'react'
import "./style.scss"
import DetailsBanner from './detailsBanner/DetailsBanner'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const Details = () => {
  const {mediaType, id} = useParams();
  const {data, loading} =  useFetch(`/${mediaType}/${id}/videos`);
  const {data:credits, loading:creditsLoading} = useFetch(`/${mediaType}/${id}/credits`)


  return (
    <div className='details'>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}/>
    </div>
  )
}

export default Details
