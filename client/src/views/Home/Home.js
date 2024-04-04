import React from 'react'
import "./Home.css"
import Image from "./electronics.png"
import Iphone from "./iphone2.png"
import Tablet from "./Tablets 1.jpeg"
import Buds from "./Earbuds.jpg"
import Laptop from "./laptop.png"
import Navbar from '../../components/Navbar/Navbar'
import Review from './review.jpeg'
import Star from "./star.png"



function App() {
  
  return (
    <div>
      <Navbar />

     <div className='container'> 
      <div className='items'>
        <p className='para'>Our Best Collection For You</p>

        <h2 className='heading'>Laptop Watch Series</h2>
        <p className='para2'>Feature packed at better value than ever powerful sensors to monitor your fitness</p>

        <button className='btn'>Shop Now</button>


      </div>
      <div className='items'>

        <img src={Image} className='img'/>
        </div>
    </div>

    <div className='Container2'> 

    <p className='head2'>Trending Categories</p>
    <div className='sub-container'>
      <div className='items2'>

        <img src={Iphone} className='iphone-img'/>
        <p style={{ textAlign:"center" }} >IPhone</p>
      </div>
      <div className='items2'>
      <img src={Laptop} className='iphone-img1'/>
      <p style={{ textAlign:"center",marginTop:"35x" }} >Laptop</p>
      </div>
      <div className='items2'>
      <img src={Buds} className='iphone-img'/>
      <p style={{ textAlign:"center",marginTop:"25px" }}>Speakers</p>
      </div>
      <div className='items2'>
      <img src={Tablet} className='iphone-img3'/>
      <p style={{ textAlign:"center",marginTop:"70px" }}>Tablets</p>
      </div>
      


    </div>





    </div>
    <p className='head3'>Customer Reviews</p>


    <div className='review'>
      <div className='items3'>

        <img src={Review} className='review-img'/>

        <img src={Star} className='Star-img'/>

        <p className='para5'>"My experience with Para has been mixed. On one hand, I appreciate its compact size and portability, making it convenient to carry around. </p>
      </div>
      <div className='items3'>
      <img src={Review} className='review-img'/>
      <img src={Star} className='Star-img'/>
      <p className='para5'>"I was initially excited to try out Para, but unfortunately, it fell short of my expectations. While the design is stylish, I found the functionality to be lacking. </p>

      </div>
      <div className='items3'>
      <img src={Review} className='review-img'/>
      <img src={Star} className='Star-img'/>
      <p className='para5'>"I particularly appreciate its versatility, allowing me to seamlessly switch between different modes depending on my needs. </p>
      

      </div>
    
      



    </div>
    </div>
    
    



    
  )
}

export default App