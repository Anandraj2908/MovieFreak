import React from 'react'
import dayjs from 'dayjs'
import "./style.scss"
import RatingProgressBar from '../rating/RatingProgressBar'
import { useNavigate } from 'react-router-dom'
const Card = ({imageUrl,item}) => {
  const navigate = useNavigate();
  return (
    <div className='myCard rounded-lg shadow bg-gray-800 border-gray-700 mx-3 my-5' onClick={()=>{navigate("https://anandraj.tech")}}>
    <div className="myCardContainer"> 
      <img className="rounded-t-lg" src={imageUrl} alt="" />
      <div className="cardContent flex p-2">
      <div className="textContent">
      <p className='title mx-2 '>{item.title}</p>
      <p className='date mx-2 my-2'>{dayjs().format(item.release_date)}</p>
      </div>
      <RatingProgressBar className="progressBar" rating={item.vote_average}/>
      </div>
    </div>
    </div>
    
  )
}

export default Card
