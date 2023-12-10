import React from 'react'
import "./style.scss"
const Card = ({imageUrl,item}) => {
  console.log(item)
  return (
    <div className="myCard rounded-lg shadow bg-gray-800 border-gray-700 mx-3 my-5 ">
      <img className="rounded-t-lg" src={imageUrl} alt="" />
      <p className='title mx-3 my-5'>{item.title}</p>
    </div>
  )
}

export default Card
