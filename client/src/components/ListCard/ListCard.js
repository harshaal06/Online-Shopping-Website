import React from 'react'
import './ListCard.css'



function ListCard({_id,url,title,content,price}) {
  return (
    <div className='card-container'>
        <div className='list-card'>

        <img src={url} alt='laptopimg' className='list-img'/>
        <h1 className='list-title'>{title}</h1>
        <p className='list-content'>{content}</p>
        <h2 className='list-price'>₹ {price}</h2>

        </div>
    </div>
  )
}

export default ListCard