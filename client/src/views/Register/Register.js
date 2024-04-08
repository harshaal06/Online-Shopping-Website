import React, { useState } from 'react'
import './Register.css';
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function Register() {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [mob, setMob] = useState('');
  const [address, setAddress] = useState('');

  const register = async() => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/order`,
    { name, email, pass, mob, address})
    toast.success(response.data.message)
}

  const reset = () => {
    setName('')
    setEmail('')
    setPass('')
    setMob('')
    setAddress('')
  }

  return (
    <div>
        <Navbar />
        <div className="container">
          <div className='col-12 col-sm-5 card m-auto shadow p-4 my-5'>
            <h3 className="text-center">Register</h3><hr />
            <p className="mb-2">Name : </p>
                <input type='text'
                placeholder='Enter first and last name'
                value={name}
                onChange={(e)=>{
                    setName(e.target.value)
                }} 
                className='mb-3 p-2 px-3 rounded border border-black'/>
            <p className="mb-2">Email : </p>
                <input type='email'
                placeholder='email@example.com'
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }} 
                className='mb-3 p-2 px-3 rounded border border-black'/>

            <p className="mb-2 col-6">Password : </p>
            <input type='password'
              placeholder='********'
              value={pass}
              onChange={(e)=>{
                setPass(e.target.value)
              }} 
              className='mb-3 p-2 px-3 rounded border border-black'/>
            <p className="mb-2">Mob no : </p>
                <input type='number'
                placeholder='+91 1234567890'
                value={mob}
                onChange={(e)=>{
                    setMob(e.target.value)
                }} 
                className='mb-3 p-2 px-3 rounded border border-black'/>
                <p class="mb-2" >Address :</p>
            <textarea name="Message" rows="3" placeholder="Write your address" required
            class="w-100 mb-3 p-2 px-3 rounded border border-black" 
            value={address}
            onChange={(e)=>{
                setAddress(e.target.value)
            }}/>
            <div>
                <button type='button' onClick={reset} className="mt-2 py-2 rounded me-2 bod">Reset</button>
                <button type='button' onClick={register} className="mt-2 py-2 rounded bod bag-c">Register</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Register