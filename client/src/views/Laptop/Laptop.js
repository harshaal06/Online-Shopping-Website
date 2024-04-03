import React, { useEffect, useState } from 'react'
import './Laptop.css'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import ListCard from '../../components/ListCard/ListCard';

function Laptop() {
  const [laptopList,setLaptopList] = useState([]);

  const loadList = async ()=>{
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/laptop`);
      console.log(response.data.data);
     setLaptopList(response.data.data);
  }
  useEffect(()=>{
    loadList(); 
},[])

  return (
    <div>
        <Navbar />
        <h1 style={{textAlign: 'center',margin: '50px',fontSize: '70px'}}> Laptop💻 </h1>
 
            <div className='Card-container'>
             {
              laptopList.map((list,index)=>{
               const {_id,url,title,content,price} = list
               return (
                <ListCard key={_id} _id={_id} url={url} title={title} content={content} price={price}/>
               )

              })
             }
            </div>
         

    </div>
  )
}

export default Laptop