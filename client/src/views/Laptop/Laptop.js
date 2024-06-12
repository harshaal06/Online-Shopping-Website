import React, { useEffect, useState } from 'react'
import './Laptop.css'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import ListCard from '../../components/ListCard/ListCard';
import Footer from '../../components/Footer/Footer';

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
 
             <img src='https://supertechwebstore.com/wp-content/uploads/2023/05/ef8083bfe79088dc00bd8eca9c821cd5.jpg' className='img'/>
             <h2 className='hading-1'>"To ensure that your data doesn't fall into the wrong hands, it's essential to perform a low-level formatting of your hard disk before selling your laptop. This process not only erases your data but also overwrites it with random information, making data recovery extremely difficult. 💡 Steps to Safeguard Your..." </h2>
            <div className='container'>
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
         
   <Footer/>
    </div>
  )
}

export default Laptop