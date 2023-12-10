import React from 'react'
import "./style.scss"
const Card = ({imageUrl,item}) => {
  return (
    <div className="rounded-lg shadow bg-gray-800 border-gray-700 mx-3 my-5 min-w-[16%]">
    <img className="rounded-t-lg" src={imageUrl} alt="" />
    <div className="p-5">
        
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.title}</p>
        
    </div>
</div>
  )
}

export default Card
