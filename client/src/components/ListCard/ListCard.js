import React from 'react'
import './ListCard.css'
import { Link } from 'react-router-dom'



function ListCard({_id,url,title,content,price}) {
  return (
    <div className='card-container'>
        <div className='list-card'>

        <img src={url} alt='laptopimg' className='list-img'/>
        <h1 className='list-title'>{title}</h1>
        <p className='list-content'>{content.substring(0,130)} {title.length > 20 ? "..." : <Link to={`/laptop-blog/${_id}`}>Read More</Link>}</p>
        
        <h2 className='list-price'>₹ {price}</h2>
    
        <Link to={`/ordernow/laptop/${_id}`} className='text-decoration-none'><button className='order-btn'>order now</button></Link>
        </div>
    </div>
  )
}

export default ListCard