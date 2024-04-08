import React, { useEffect, useState } from 'react'
import './AdminOrderNow.css';
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function AdminOrderNow() {

  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [price, setPrice] = useState('');
  const [name, setName] = useState('');
  const [imgurl, setImgurl] = useState('https://i.pravatar.cc/?img=13');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [code, setCode] = useState('');
  const [mob, setMob] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [payment, setPayment] = useState('');
  const {type} = useParams();

  const {id} = useParams();

  const loadItem = async (id) => {
    if(!id) return

    const response = await axios.get(`${process.env.REACT_APP_API_URL}/${type}/${id}`)

    setUrl(response.data.data.url)
    setTitle(response.data.data.title)
    setContent(response.data.data.content)
    setPrice(response.data.data.price)
  }

  useEffect(()=>{
    loadItem(id)
  }, [id])

  const addOrder = async() => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/order`,
    { url, title, content, price, name, imgurl, address, city, state, code, mob, email, pass, payment, type })
    toast.success(response.data.message);
    reset()
  }

  const reset = () => {
    setUrl('');
    setTitle('');
    setContent('');
    setPrice('');
    setName('');
    setImgurl('');
    setEmail('');
    setPass('');
    setMob('');
    setAddress('');
    setCity('');
    setState('');
    setCode('');
    setPayment('');
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
            value={name}
            onChange={(e)=>{
              setName(e.target.value)
            }} 
            class="w-100 p-2 px-3 rounded border border-black" />
          <p class="my-2 mt-3">Your Img Url :</p>
          <input type="text" placeholder="Your first and last name" required
          value={imgurl}
          onChange={(e)=>{
            setImgurl(e.target.value)
          }} 
            class="w-100 p-2 px-3 rounded border border-black" />
            <div class="row my-2 mt-3 d-flex justify-content-between">
                <div class="col-md-6 col-xs-12">
                    <p class="my-2">Email Address :</p>
                    <input type="text" placeholder="email@example.com" required 
                    value={email}
                    onChange={(e)=>{
                      setEmail(e.target.value)
                    }} class="w-100 p-2 px-3 rounded border border-black" />
                </div>
                <div class="col-md-6 col-xs-12">
                    <p class="my-2">Password :</p>
                    <input type="password" placeholder="" required 
                    value={pass}
                    onChange={(e)=>{
                      setPass(e.target.value)
                    }} class="w-100 p-2 px-3 rounded border border-black" />
                </div>
            </div>
            <div class="row my-2 mt-3 d-flex justify-content-between">
                <div class="col-md-6 col-xs-12">
                <p class="my-2">Mob. No. :</p>
                <input type="number" placeholder="1234567890" required 
                value={mob}
                onChange={(e)=>{
                  setMob(e.target.value)
                }} 
                class="w-100 p-2 px-3 rounded border border-black" />
                </div>
                <div class="col-md-6 col-xs-12">
                <p class="my-2">Payment Mode :</p>
                <select 
                value={payment}
                onChange={(e)=>{
                  setPayment(e.target.value)
                }}
                className='w-100 mb-3 p-2 px-3 rounded border border-black'>
                    <option value="Cash on delivery">Cash on delivery</option>
                    <option value="Cash on delivery">Other</option>
                </select>
                </div>
            </div>
          <p class="my-2" >Address :</p>
          <input placeholder="Write your detail address" required
          value={address}
          onChange={(e)=>{
            setAddress(e.target.value)
          }} 
            class="w-100 p-2 px-3 rounded border border-black" />
          <div class="row my-2 mt-3 d-flex justify-content-between">
            <div class="col-md-5 col-xs-12">
              <p class="my-2">City :</p>
              <input type="text" placeholder="Your city" required 
              value={city}
              onChange={(e)=>{
                setCity(e.target.value)
              }} 
              class="w-100 p-2 px-3 rounded border border-black" />
            </div>
            <div class="col-md-4 col-xs-12">
              <p class="my-2">State :</p>
              <input type="text" placeholder="Your state" required 
              value={state}
              onChange={(e)=>{
                setState(e.target.value)
              }} 
              class="w-100 p-2 px-3 rounded border border-black" />
            </div>
            <div class="col-md-3 col-xs-12">
              <p class="my-2">ZIP Code</p>
              <input type="number" placeholder="000-000" required 
              value={code}
              onChange={(e)=>{
                setCode(e.target.value)
              }} 
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
                value={type}
                className='col-7 w-50 mb-3 p-2 px-3 rounded border border-black'>
                    <option value="">Select</option>
                    <option value="mobile">Mobile</option>
                    <option value="laptop">Laptop</option>
                    <option value="tablet">Tablet</option>
                </select>
            </div>
            <div class="border-bottom border-dark-subtle py-2 my-2 d-flex position-relative">
                <img src={url} class="w-25 rounded" />
                <div class="ms-3">
                    <p class="mb-1">{title}</p>
                    <p>Rs. {price}/-</p>
                    <span role="button" class="position-absolute top-0 end-0 ha fs-4">x</span>
                </div>
            </div>
            <div class="d-flex justify-content-between mt-3">
                <p>Total</p>
                <div class="ha">{price}</div>
            </div>
        </div>
        </div>
        <div class="mt-2 d-flex">
          <button type="button" onClick={addOrder} class="px-5 py-2 rounded border btn-bg">Place Your Order</button>
          <h5 class="mt-2 ms-4">Need help? <Link to="/contact">Contact us!</Link></h5>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AdminOrderNow
