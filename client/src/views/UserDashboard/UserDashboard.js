import React, { useState, useEffect } from "react";
import './UserDashboard.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from "react-router-dom";
import Profile from './user.png'
import Order from './order.png'
import Edit from './edit.png'
import Logout from './logout.png'

function UserDashboard() {
  const [activeTab, setActiveTab] = useState("login");
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [activeComponent, setActiveComponent] = useState("profile");
  const [orders, setOrders] = useState([]);

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [imgurl, setImgurl] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [code, setCode] = useState('');
  const [mob, setMob] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [price, setPrice] = useState('');
  const [payment, setPayment] = useState('');
  const [type, setType] = useState('');

  const loadItem = async () =>{
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/order`);

    await setOrders(response.data.data);
  }

  const login = () => {
    let count = 0;
    if(loginEmail==="" || loginPass===""){
      toast('Enter email and password', {
        icon: '➕',
      });
    }
    else{
      orders.map((order) => {
        const {_id, url, title, content, price, name, imgurl, address, city, state, code, mob, email, pass, payment, type} = order;
        if(loginEmail===email){
          if(loginPass!==pass){
            toast.error("Incorrect password ");
            return;
          }
          else if(loginPass===pass){
            toast.success("Successfully Login");
            setActiveTab("main");
            setId(_id);
            setName(name);
            setImgurl(imgurl);
            setAddress(address);
            setCity(city);
            setState(state);
            setCode(code);
            setMob(mob);
            setEmail(email);
            setPass(pass);
            setUrl(url);
            setTitle(title);
            setContent(content);
            setPrice(price);
            setType(type);
            setPayment(payment);
            return;
          }
        }
      })
    }
  }

  const updateData = async() => {
    const response = await axios.put(`${process.env.REACT_APP_API_URL}/order/${id}`,
    {
      name, address, city, state, code, mob, email, pass
    })
    toast.success(response.data.message);
    loadItem();
    setActiveComponent("profile");
  }

  const cancelOrder = async() => {
    const response = await axios.put(`${process.env.REACT_APP_API_URL}/order/${id}`,
    {
      url: " ",
      title: " ",
      content: " ",
      price: " ",
      payment: " ",
      type: " "
    })
    toast.success("Order delete successfully");
    login();
    loadItem();
  }

  useEffect(()=>{
    loadItem();
  }, []);


  const handleSetActiveComponent = (component) => {
    setActiveComponent(component);
  };

  const logout = ()=> {
    window.location.href = '/'
  }

  return (
    <div className="body">
    {activeTab === "login" && (
      <div>
      <Navbar />
      <div className="container pt-4">
          <div className='col-12 col-sm-5 card m-auto shadow p-4 mt-5'>
            <h3 className="text-center mb-3">Login</h3><hr />
            <p className="mb-2">Email : </p>
                <input type='email'
                placeholder='email@example.com'
                value={loginEmail}
                onChange={(e)=>{
                    setLoginEmail(e.target.value)
                }} 
                className='mb-4 p-2 px-3 rounded border border-black'/>

            <p className="mb-2 col-6">Password : </p>
            <input type='password'
              placeholder='********'
              value={loginPass}
              onChange={(e)=>{
                setLoginPass(e.target.value)
              }} 
              className='mb-3 p-2 px-3 rounded border border-black'/>
            <Link to="/contact" className="mb-3">Forgot your password?</Link>

            <button type='button' onClick={login} className="w-100 mt-2 py-2 rounded border bag">Login</button>
            
          </div>
        </div>
      </div>
    )}
    {activeTab === "main" && (
    <div>
        <h1 className="text-center p-3 bg-dark text-white">Hello 👋 {name}</h1>
        <div className="m-3 mx-4">
          <div className='row'>
            <div className="container d-block d-md-none col-12 rounded-4 bg-dark text-white mb-3">
              <div className="d-flex justify-content-evenly p-2">
                <img src={Profile} className="icon-ht" onClick={() => handleSetActiveComponent("profile")}/>
                <img src={Order} className="icon-ht" onClick={() => handleSetActiveComponent("oderDetails")}/>
                <img src={Edit} className="icon-ht" onClick={() => handleSetActiveComponent("editProfile")}/>
                <img src={Logout} className="icon-ht" onClick={logout}/>
              </div>
            </div>
            <div className='col-2 pt-3 shadow rounded-4 bg-dark text-white menu-box-user d-none d-md-block'>
                <div className="fs-5 m-2 my-3 p-2 px-4 rounded-4 cursor-pointer dash-item"
                    onClick={() => handleSetActiveComponent("profile")}>
                      Profile
                </div>
                <div className="fs-5 m-2 my-3 p-2 px-4 rounded-4 cursor-pointer dash-item"
                    onClick={() => handleSetActiveComponent("oderDetails")}>Order Details</div>
                <div className="fs-5 m-2 my-3 p-2 px-4 rounded-4 cursor-pointer dash-item"
                    onClick={() => handleSetActiveComponent("editProfile")}>Edit Profile</div>
                <div className="fs-5 m-2 my-3 p-2 px-4 rounded-4 bg-danger cursor-pointer text-center"
                    onClick={logout}>Logout</div>
            </div>
            <div className={`col-12 col-md-10 ${activeComponent ? "active" : ""}`}>
              <div className="shadow w-100 rounded-4 card border-dark menu-box-user">
                {activeComponent === "profile" && (
                  <div>
                    <h1 className="text-center pt-2 pt-2">Profile</h1><hr />
                    <div className="container">
                      <div className="row mb-4">
                        <div className="col-12 col-md-4 border-end border-dark">
                            <img src={imgurl} className="col-6 m-4 imd-pro d-block mx-auto rounded-circle border border-dark"/>
                            <p className="fs-1 text-center">{name}</p>
                        </div>
                        <div className="col-12 col-md-8 text-center text-md-start">
                          <div className="row">
                            <h5 className="my-3">Contact Details</h5>
                              <p className="my-1 mx-3"><span className="fw-semibold">Email: </span>{email}</p>
                              <p className="my-1 mx-3"><span className="fw-semibold">Mob No.: </span>{mob}</p>
                              <p className="my-1 mx-3"><span className="fw-semibold">Password: </span>********</p>
                          </div><hr />
                          <div className="row">
                            <h5 className="my-3">Address Details</h5>
                            <p className="my-1 mx-3"><span className="fw-semibold">Address: </span>{address}</p>
                            <p className="my-1 mx-3"><span className="fw-semibold">City: </span>{city}</p>
                            <p className="my-1 mx-3"><span className="fw-semibold">State: </span>{state}-{code}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeComponent === "oderDetails" && (
                  <div>
                    <h1 className="text-center pt-2">Order Details</h1><hr />
                    <div className="container">
                    <div class="card m-3">
                      <div class="row g-0 text-center text-md-start">
                        <div class="col-md-3 col-12">
                          <img src={url} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8 col-12">
                          <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text">{content}</p>
                            <p class="card-text"><small class="text-body-secondary fs-5">Rs. {price}</small></p>
                            <p class="card-text">Type of product: <b>{type}</b></p>
                            <p class="card-text fw-light">Payment mode: {payment}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type='button' onClick={cancelOrder} className="mt-3 py-2 rounded border bag-c d-block mx-auto mb-4">Cancel Order</button>
                    </div>
                  </div>
                )}
                {activeComponent === "editProfile" && (
                  <div>
                  <h1 className="text-center pt-2 pt-2">Edit Profile</h1><hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-12 col-md-4 border-end border-dark">
                          <img src={imgurl} className="col-6 m-4 imd-pro d-block mx-auto rounded-circle border border-dark"/>
                          <p className="my-1 mx-3 text-center"><span className="fw-semibold">Img Url: </span>
                            <input type='text'
                              placeholder='Enter address'
                              value={imgurl}
                              onChange={(e)=>{
                                setImgurl(e.target.value)
                              }} 
                              className='w-100 mb-3 px-3 rounded border border-black'/>
                          </p>
                          <p className="fs-5 text-center">
                            <span className="mb-2">Name : </span>
                            <input type='text'
                              placeholder='Enter name'
                              value={name}
                              onChange={(e)=>{
                                setName(e.target.value)
                              }} 
                              className='mb-1 p-2 px-3 rounded border border-black'/>
                              <button type='button' onClick={updateData} className="fs-6 mt-3 py-2 rounded border bag">Update</button>
                            </p>
                            
                      </div>
                      <div className="col-12 col-md-8 text-center text-md-start mb-4">
                        <div className="row">
                          <h5 className="my-3">Contact Details</h5>
                            <p className="my-1 mx-3"><span className="fw-semibold">Email: </span>
                              <input type='text'
                                placeholder='Enter email'
                                value={email}
                                onChange={(e)=>{
                                  setEmail(e.target.value)
                                }} 
                                className='px-3 rounded border border-black'/>
                              </p>
                            <p className="my-1 mx-3"><span className="fw-semibold">Mob No.: </span> <input type='text'
                                  placeholder='Enter Mob'
                                  value={mob}
                                  onChange={(e)=>{
                                    setMob(e.target.value)
                                  }} 
                                  className='px-3 rounded border border-black'/>
                            </p>
                            <p className="my-1 mx-3"><span className="fw-semibold">Password: </span>
                              <input type='text'
                                  placeholder='Enter Password'
                                  value={pass}
                                  onChange={(e)=>{
                                    setPass(e.target.value)
                                  }} 
                                  className='px-3 rounded border border-black'/>
                            </p>
                        </div><hr />
                        <div className="row">
                          <h5 className="my-3">Address Details</h5>
                          <p className="my-1 mx-3"><span className="fw-semibold">Address: </span>
                            <input type='text'
                              placeholder='Enter address'
                              value={address}
                              onChange={(e)=>{
                                setAddress(e.target.value)
                              }} 
                              className='w-75 px-3 rounded border border-black'/>
                          </p>
                          <p className="my-1 mx-3"><span className="fw-semibold">City: </span>
                            <input type='text'
                              placeholder='Enter city'
                              value={city}
                              onChange={(e)=>{
                                setCity(e.target.value)
                              }} 
                              className='px-3 rounded border border-black'/>
                          </p>
                          <p className="my-1 mx-3"><span className="fw-semibold">State: </span>
                            <input type='text'
                              placeholder='Enter state'
                              value={state}
                              onChange={(e)=>{
                                setState(e.target.value)
                              }} 
                              className='px-3 rounded border border-black'/>
                          </p>
                          <p className="my-1 mx-3"><span className="fw-semibold">Pin code: </span>
                            <input type='text'
                              placeholder='Enter code'
                              value={code}
                              onChange={(e)=>{
                                setCode(e.target.value)
                              }} 
                              className='px-3 rounded border border-black'/>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                )}
              </div>
            </div>
          </div>
        </div>
    </div>
    )}
    </div>
  )
}

export default UserDashboard