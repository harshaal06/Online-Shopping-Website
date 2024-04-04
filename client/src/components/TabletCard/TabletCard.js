import React from 'react';

const TabletCard = ({ tablet }) => {
  const { name, brand, price, imageUrl } = tablet;

  return (
    <div className="tablet-card">
      <img src={imageUrl} alt={name} />
      <div className="tablet-details">
        <h2>{name}</h2>
        <p>Brand: {brand}</p>
        <p>Price: ${price}</p>
        {}
      </div>
    </div>
  );
};

export default TabletCard;