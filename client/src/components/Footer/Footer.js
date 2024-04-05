import React from 'react'
import "./Footer.css"
import Facebook from "./facebook.png"
import Twitter from "./Twitter.png"
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div>
    <div  className='Footer'>
      <div className='Footer-subitem'>
        <p className='Heading'>Ecomerce Website</p>
        <p className='sub-Heading'>"Thank you for visiting our e-commerce website. Explore our range of products and enjoy secure shopping with us."</p>
      </div>
      <div className='Footer-subitem'>
      <p className='Heading'>Quick Links</p>
        <ul type="none" className='list-items2'>
          <li className='list'><Link to="/">Home</Link></li>
          <li className='list'><Link to="/contact">Contact</Link></li>
          <li className='list'><Link to="/about">About us</Link></li>
          <li className='list'>
            <Link to="/check-order">Login</Link></li>
        </ul>
        
      </div>
      <div className='Footer-subitem'>
      <p className='Heading'>Social Media</p>
        <ul type="none" className='List-items'>
          <li className='Logo-img'><img src={Facebook} className='facebook-img' alt=""/> Facebook</li>&nbsp;
          <li className='Logo-img'><img src={Twitter} className='facebook-img' alt=""/> Twitter</li>
          
        </ul>

      </div>
      <div className='Footer-subitem'>

      <p className="Heading"> <b> For Customer Support </b> </p>
                <ul className="list" type="none">
                    <li> <Link to="tel: +91 5454545454"> Contact No: +91 9172897793 </Link> </li> 
                    <li> <Link to="mailto: kibble@gmail.com"> Mail To: Ecomerce@gmail.com </Link> </li>
                </ul>
        
      </div>

      


    </div>
    <div className='rights'>
    Copyright &#169; Eommerce@gmail.com  | All right are reserved.

    </div>
    </div>
    
    

    
    

      
      






    
  )
}

export default Footer