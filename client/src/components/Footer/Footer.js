import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import Facebook from './facebook.png'
import Instagram from './instagram.png'
import Linkedin from './linkedin.png'
import Twitter from './tw.png'
import Gadgets from './gadgets.png'

function Footer() {
  return (
    <div className='bg-dark'>
    <div className='container'>
        <div class="row d-flex justify-content-around text-light py-3 pb-0">
          <div class="col-md-4 col-sm-12 mt-4 text-center">
            <img src={Gadgets} class="w-25 mb-4" />
            <h2 class="fw-bold">Website Name</h2>
            <p class="fw-light m-0">To develop a knowledge based society with clarity of thoughts and charity at hearts to serve humanity with integrity.</p>
          </div>
          <div class="col-md-2 col-sm-12 mt-4 text-center text-md-start">
            <p class="fs-5 m-0">Quick Links</p>
            <ul>
              <Link to="/about" class="text-decoration-none text-light"><li class="list-group-item m-2">About us</li></Link>
              <Link to="/contact" class="text-decoration-none text-light"><li class="list-group-item m-2">Contact us</li></Link>
              <Link to="/about" class="text-decoration-none text-light"><li class="list-group-item m-2">Review</li></Link>
              <Link to="/order-now" class="text-decoration-none text-light"><li class="list-group-item m-2">Order Now</li></Link>
              <Link to="/check-order" class="text-decoration-none text-light"><li class="list-group-item m-2">Login</li></Link>
            </ul>
          </div>
          <div class="col-md-2 col-sm-12 mt-4 text-center text-md-start">
            <p class="fs-5 m-0">Products</p>
            <ul>
              <Link to="/laptop" class="text-decoration-none text-light"><li class="list-group-item m-2">Laptops</li></Link>
              <Link to="/tablet" class="text-decoration-none text-light"><li class="list-group-item m-2">Tablets</li></Link>
              <Link to="/mobile" class="text-decoration-none text-light"><li class="list-group-item m-2">Mobiles</li></Link>
            </ul>
          </div>
          <div class="col-md-4 col-sm-12 mt-4 text-center text-md-start">
            <p class="fs-5 m-0">Contact</p>
            <ul>
              <li class="list-group-item my-2">📌 84, collegeName, Laxmi Narayan Chowk, Opposite Narayana Residency, Ward No 3, Prasad Colony, Nagpur - 441108</li>
              <li class="list-group-item my-2">📱<a href="mob:8010564343" class="text-decoration-none">+91 8010564343</a></li>
              <li class="list-group-item my-2">✉️<a href="mailto:hemantagl206@gmail.com" class="text-decoration-none"> heritagehorizon@gmail.com</a></li>
              <li class="list-group-item my-3">
                <a href="#"><img src={Linkedin} alt="" className="icon-h" /></a>
                <a href="#"><img src={Twitter} alt="" className="icon-h" /></a>
                <a href="#"><img src={Facebook} alt="" className="icon-h" /></a>
                <a href="#"><img src={Instagram} alt="" className="icon-h" /></a>
              </li>
            </ul>
          </div>
          <p class="text-center pt-4">Copyright © <a href="https://harshal-aglawe.vercel.app/" class="text-decoration-none text-light">harshal-aglawe</a> 2024</p>
        </div>
    </div>
    </div>
  )
}

export default Footer