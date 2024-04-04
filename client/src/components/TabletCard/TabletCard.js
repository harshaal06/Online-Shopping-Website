import React from 'react';

const TabletCard = ({ tablet }) => {
  const { name, content, price, imageUrl } = tablet;

  return (
    <div className="tablet-card">
      <img src={imageUrl} alt={name} />
      <div className="tablet-details">
        <h2>{name}</h2>
        <p>content: {content}</p>
        <p>Price: ${price}</p>
        {}
      </div>
    </div>
  );
};

export default TabletCard;