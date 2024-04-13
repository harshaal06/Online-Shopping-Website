import React, { useEffect, useState } from 'react'
import './OrderNow.css';
import Navbar from '../../components/Navbar/Navbar'
import Footer from "../../components/Footer/Footer"
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

function OrderNow() {
  const msg = () => {
    toast("First Add Your Order");
  }
  return (
    <div>
    <Navbar />
    <div class="container">
      <div class="row d-flex my-5 ms-md-5">
        <div class="col-md-7 col-xs-12">
            <div className='bg-white border p-5 shadow'>
          <h3>Shipping Information</h3>
          <p class="my-2 mt-5">Full Name :</p>
          <input type="text" placeholder="Your first and last name" required
          onClick={msg}
            class="w-100 p-2 px-3 rounded border border-black" />
          <p class="my-2 mt-3">Your Img Url :</p>
          <input type="text" placeholder="Enter your profile URL" required
          
            class="w-100 p-2 px-3 rounded border border-black" />
            <div class="row my-2 mt-3 d-flex justify-content-between">
                <div class="col-md-6 col-xs-12">
                    <p class="my-2">Email Address :</p>
                    <input type="text" placeholder="email@example.com" required 
                     class="w-100 p-2 px-3 rounded border border-black" />
                </div>
                <div class="col-md-6 col-xs-12">
                    <p class="my-2">Password :</p>
                    <input type="password" placeholder="*****" required 
                     class="w-100 p-2 px-3 rounded border border-black" />
                </div>
            </div>
            <div class="row my-2 mt-3 d-flex justify-content-between">
                <div class="col-md-6 col-xs-12">
                <p class="my-2">Mob. No. :</p>
                <input type="number" placeholder="1234567890" required 
                 
                class="w-100 p-2 px-3 rounded border border-black" />
                </div>
                <div class="col-md-6 col-xs-12">
                <p class="my-2">Payment Mode :</p>
                <select 
                
                className='w-100 mb-3 p-2 px-3 rounded border border-black'>
                    <option value="Cash on delivery">Cash on delivery</option>
                    <option value="Cash on delivery">Other</option>
                </select>
                </div>
            </div>
          <p class="my-2" >Address :</p>
          <input placeholder="Write your detail address" required
          
            class="w-100 p-2 px-3 rounded border border-black" />
          <div class="row my-2 mt-3 d-flex justify-content-between">
            <div class="col-md-5 col-xs-12">
              <p class="my-2">City :</p>
              <input type="text" placeholder="Your city" required 
              
              class="w-100 p-2 px-3 rounded border border-black" />
            </div>
            <div class="col-md-4 col-xs-12">
              <p class="my-2">State :</p>
              <input type="text" placeholder="Your state" required 
              
              class="w-100 p-2 px-3 rounded border border-black" />
            </div>
            <div class="col-md-3 col-xs-12">
              <p class="my-2">ZIP Code</p>
              <input type="number" placeholder="000-000" required 
              
              class="w-100 p-2 px-3 rounded border border-black" />
            </div>
          </div>
          </div>
        </div>
        <div class="col-md-5 col-xs-12 h-25 mt-3 mt-md-0">
            <div className='bg-white border p-5 pb-3 shadow'>
          <h3 class="mb-4">Order Summary</h3>
          <div className='row'>
                <p class="my-2 col-5">Product Type :</p>
                <select 
                
                className='col-7 w-50 mb-3 p-2 px-3 rounded border border-black'>
                    <option value="mobile">Mobile</option>
                    <option value="laptop">Laptop</option>
                    <option value="tablet">Tablet</option>
                </select>
            </div>
            <div class="border-bottom border-dark-subtle py-5">
              <Link to="/tablet" className='text-decoration-none' ><button type="button" class="px-3 px-md-5 py-2 rounded border d-block mx-auto btn-bg">First Add Your Order</button></Link>
            </div>
            <div class="d-flex justify-content-between mt-3">
                <p>Total</p>
                <div class="ha">0</div>
            </div>
        </div>
        </div>
        <div class="mt-2 d-flex flex-wrap">
          <button type="button" onClick={msg} class="px-3 px-md-5 py-2 rounded border btn-bg">Place Your Order</button>
          <h5 class="mt-2 ms-4">Need help? <Link to="/contact">Contact us!</Link></h5>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default OrderNow