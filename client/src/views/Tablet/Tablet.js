import React, { useEffect, useState } from 'react';
import './Tablet.css'; 
import axios from 'axios'
import TabletCard from '../../components/TabletCard/TabletCard';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Tablet() {

  const [tabletList, setTabletList] = useState([]);

  const loadList = async ()=>{
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/tablet`);
      console.log(response.data.data);
      setTabletList(response.data.data);
     
  }
  useEffect(()=>{
    loadList(); 
},[])


  return (
    <div>
      <Navbar />
      <div className="tablet-container">
      <h1 className="tablet-heading">Galaxy Tab A9 | Tab A9+</h1>
      <img src="https://images.samsung.com/is/image/samsung/p6pim/in/feature/164866028/in-feature-galaxy-tab-a-538734898?$FB_TYPE_A_JPG$"  className='main-container'/>
      <p className='p-4'>*Image simulated for illustrative purposes.**Storage options and availability may vary by country or region.***Actual storage availability may vary depending on pre-installed software.****Two memory and storage options are available for Galaxy Tab A9 and Tab A9+: 4GB memory and 64GB storage, 8GB memory and 128GB storage.*****MicroSD card sold separately. All models support microSD cards with up to 1TB storage. External memory can be used to store media (photos, video and music files), but not applications. Availability may vary by country and manufacturer.</p><br/>
      <div className="container mb-5">
        <div className='card-box-tablet'>
      {
        tabletList.map((list,index)=>{
          const {_id,url,title,content,price} = list
          return (
          <TabletCard key={_id} _id={_id} url={url} title={title} content={content} price={price}/>
          )

        })
      }
      </div>
      </div>
      </div>

      <Footer/>

    </div>
  );
}

export default Tablet;
