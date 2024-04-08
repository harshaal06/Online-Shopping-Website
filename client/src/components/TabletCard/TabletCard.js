import React from 'react';
import './TabletCard.css';
import {Link} from 'react-router-dom';

const TabletCard = ({ _id,url,title,content,price }) => {
  
  return (
    <div className="tablet-card card">
      <img src={url} alt={title} className='img-wth'/>
      <div className="tablet-details">
        <h2>{title}</h2>
        <p>{content.substring(0,130)}. . .<Link to={`/tablet-blog/${_id}`} className='text-decoration-none'>Read more</Link></p>
        
        
        <h4 className='mt-3'>Price: ₹ {price}</h4>
        <Link to={`/ordernow/tablet/${_id}`}><button className='order-btn'>order now</button></Link>
      </div>
    </div>
  );
};

export default TabletCard;