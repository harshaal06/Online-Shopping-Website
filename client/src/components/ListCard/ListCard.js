import React from 'react'
import './ListCard.css'
import { Link } from 'react-router-dom'



function ListCard({_id,url,title,content,price}) {
  return (
    <div className='card-container'>
        <div className='list-card'>

        <img src={url} alt='laptopimg' className='list-img'/>
        <h1 className='list-title'>{title}</h1>
        <p className='list-content'>{content.substring(0,150)} {title.length > 20 ? "..." : null}</p>
        <Link to={`/laptop-blog/${_id}`}>Read More</Link>
        <h2 className='list-price'>₹ {price}</h2>

        </div>
    </div>
  )
}

export default ListCard