import React from 'react'
import dayjs from 'dayjs'
import "./style.scss"
import { useNavigate } from 'react-router-dom'
import avatar from "../../../assets/noImage.png"
const Card = ({item, imageUrl, query}) => {
  const navigate = useNavigate();
  const title = item.title || item.original_title || item.name; 
  console.log(item)
  return (
    <div className='myCard mx-3 my-3' onClick={() => navigate(`/${item.media_type}/${item.id}`)}>
    <div className="myCardContainer"> 
      <img className="cardImage rounded-lg shadow " src={imageUrl || avatar} alt="" />
      <div className="cardContent flex p-2">
      <div className="">
      <p className='myTitle mx-2 '>{title}</p>
      </div>
      </div>
    </div>
    </div>
    
  )
}

export default Card
