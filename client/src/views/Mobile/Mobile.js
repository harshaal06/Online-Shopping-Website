import React, { useEffect, useState } from 'react'
import './Mobile.css'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import MobileCard from '../../components/MobileCard/MobileCard'
import Footer from '../../components/Footer/Footer';




function Mobile() {
  const [MobileList,setMobileList] = useState([]);

  const loadList = async ()=>{
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/Mobile`);
      console.log(response.data.data);
     setMobileList(response.data.data);
     
  }
  useEffect(()=>{
    loadList(); 
},[])

  return (
    <div>
        <Navbar /> 
 
             <img src='https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-s24-ultra/buy/S24Ultra-SeeActualSize_PC.jpg' className='w-100'/>
             <p className='mx-md-5 text-center px-md-5 p-4 fs-md-5'>"To ensure that your data doesn't fall into the wrong hands, it's essential to perform a low-level formatting of your hard disk before selling your Mobile. This process not only erases your data but also overwrites it with random information, making data recovery extremely difficult. 💡 Steps to Safeguard Your..." </p>
            <div className='container'>
            <div className='Card-container'>
             {
              MobileList.map((list,index)=>{
               const {_id,url,title,content,price} = list
               return (
                <MobileCard key={_id} _id={_id} url={url} title={title} content={content} price={price}/>
               )

              })
             }
            </div>
            </div>
         
   <Footer/>
    </div>
  )
}

export default Mobile