import React from 'react';
import './Tablet.css'; 
import TabletCard from '../../components/TabletCard/TabletCard';
import Navbar from '../../components/Navbar/Navbar';

const tabletsData = [
  {
    id: 1,
    name: 'iPad Pro',
    brand: 'Apple',
    price: 799,
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Galaxy Tab S7+',
    brand: 'Samsung',
    price: 849,
    imageUrl: 'https://via.placeholder.com/150',
  },
];

function Tablet() {
  return (
    <div>
      <Navbar /> {}
      <h1>Tablets</h1>
      <div className="tablets-container">
        {tabletsData.map((tablet) => (
          <TabletCard key={tablet.id} tablet={tablet} />
        ))}
      </div>
    </div>
  );
}

export default Tablet;