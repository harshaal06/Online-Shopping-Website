import React from 'react'
import './MobileCard.css'
import { Link } from 'react-router-dom'




function MobileCard({_id,url,title,content,price}) {
  return (
    <div className='card-container'>
        <div className='mobile-card'>

        <img src={url} alt='mobileimg' className='list-img'/>
        <h1 className='mobile-title'>{title}</h1>
        <p className='mobile-content'>{content.substring(0,130)} {title.length > 20 ? "..." : <Link to={`/mobile-blog/${_id}`}>Read More</Link>}</p>
        
        <h2 className='mobile-price'>₹ {price}</h2>
    

        </div>
    </div>
  )
}

export default MobileCard