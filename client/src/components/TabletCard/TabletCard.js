import React from 'react';
import './TabletCard.css';
const TabletCard = ({ tablet }) => {
  const { name, content, price, imageUrl } = tablet;

  return (
    <div className="tablet-card">
      <img src={imageUrl} alt={name} />
      <div className="tablet-details">
        <h2>{name}</h2>
        <p> {content}</p>
        <h4>Price: ₹ {price}</h4>
        <button className='order-btn'>order now</button>
        {}
      </div>
    </div>
  );
};

export default TabletCard;