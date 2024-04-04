import React, { useState, useEffect } from "react";
import './UserDashboard.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from "react-router-dom";

function UserDashboard() {
  const [activeTab, setActiveTab] = useState("login");
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [activeComponent, setActiveComponent] = useState("profile");
  const [orders, setOrders] = useState([]);
  const [userData, setUserData] = useState([]);

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
        const {_id, url, title, price, name, address, city, state, code, mob, email, pass, payment, type} = order;
        if(loginEmail===email){
          if(loginPass!==pass){
            toast.error("Incorrect password ");
            return;
          }
          else if(loginPass===pass){
            toast.success("Successfully Login");
            setUserData(order);
            setActiveTab("main");
            return;
          }
        }
      })
    }
}

  useEffect(()=>{
    loadItem();
  }, []);

  const addItem = async() => {
    // const response = await axios.post(`${process.env.REACT_APP_API_URL}/order`,
    // {
    //   url: url,
    //   title: title,
    //   content: content,
    //   price: price
    // })
    // toast.success(response.data.message)
    // reset()
    // loadItems();
  }

  const reset = () => {
    // setUrl('')
    // setTitle('')
    // setContent('')
    // setPrice('')
  }


  const handleSetActiveComponent = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="body">
    {activeTab === "login" && (
      <div>
      <Navbar />
      <div className="container">
          <div className='col-12 col-sm-5 card m-auto shadow p-4 mt-5'>
            <h3 className="text-center mb-3">Login</h3>
            <p className="mb-2">Email : </p>
                <input type='email'
                placeholder='email@example.com'
                value={loginEmail}
                onChange={(e)=>{
                    setLoginEmail(e.target.value)
                }} 
                className='mb-3 p-2 px-3 rounded border border-black'/>

            <p className="mb-2 col-6">Password : </p>
            <input type='password'
              placeholder='********'
              value={loginPass}
              onChange={(e)=>{
                setLoginPass(e.target.value)
              }} 
              className='mb-2 p-2 px-3 rounded border border-black'/>
            <Link to="/contact" className="mb-3">Forgot your password?</Link>

            <button type='button' onClick={login} className="w-100 mt-2 py-2 rounded border bag">Login</button>
            
          </div>
        </div>
      </div>
    )}
    {activeTab === "main" && (
    <div>
        <h1 className="text-center p-3 bg-dark text-white">Hello 👋 {userData.name}</h1>
        <div className="m-3 mx-4">
          <div className='row'>
            <div className='col-2 pt-3 shadow rounded-4 bg-dark text-white menu-box-user'>
                <div className="fs-5 m-2 my-3 p-2 px-4 rounded-4 cursor-pointer dash-item"
                    onClick={() => handleSetActiveComponent("profile")}>
                      Profile
                </div>
                <div className="fs-5 m-2 my-3 p-2 px-4 rounded-4 cursor-pointer dash-item"
                    onClick={() => handleSetActiveComponent("oderDetails")}>Order Details</div>
                <div className="fs-5 m-2 my-3 p-2 px-4 rounded-4 cursor-pointer dash-item"
                    onClick={() => handleSetActiveComponent("editProfile")}>Edit Profile</div>
            </div>
            <div className={`col-10 ${activeComponent ? "active" : ""}`}>
              <div className="shadow w-100 rounded-4 card border-dark menu-box-user">
                {activeComponent === "profile" && (
                  <div>
                    <h1 className="text-center pt-2 pt-2">Profile</h1><hr />
                    <div className="container">
                      <div className="row">
                        <div className="col-4 border-end border-dark">
                            <img src={`https://i.pravatar.cc/`} className="col-6 m-4 imd-pro d-block mx-auto rounded-circle border border-dark"/>
                            <p className="fs-1 text-center">{userData.name}</p>
                        </div>
                        <div className="col-8">
                          <div className="row">
                            <h5 className="my-3">Contact Details</h5>
                              <p className="my-1 mx-3"><span className="fw-semibold">Email: </span>{userData.email}</p>
                              <p className="my-1 mx-3"><span className="fw-semibold">Mob No.: </span>{userData.mob}</p>
                              <p className="my-1 mx-3"><span className="fw-semibold">Password: </span>********</p>
                          </div><hr />
                          <div className="row">
                            <h5 className="my-3">Address Details</h5>
                            <p className="my-1 mx-3"><span className="fw-semibold">Address: </span>{userData.address}</p>
                            <p className="my-1 mx-3"><span className="fw-semibold">City: </span>{userData.city}</p>
                            <p className="my-1 mx-3"><span className="fw-semibold">State: </span>{userData.state}-{userData.code}</p>
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
                      <div class="row g-0">
                        <div class="col-md-3">
                          <img src={userData.url} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">{userData.title}</h5>
                            <p class="card-text">{userData.content}</p>
                            <p class="card-text"><small class="text-body-secondary fs-5">Rs. {userData.price}</small></p>
                            <p class="card-text">Type of product: <b>{userData.type}</b></p>
                            <p class="card-text fw-light">Payment mode: Cash on delivery</p>
                          </div>
                        </div>
                      </div>
                    </div>
                      {/* <img src={userData.url} />
                      <h2>{userData.title}</h2>
                      <h4>{userData.content}</h4>
                      <h5>{userData.price}</h5>
                      <p>Payment: {userData.payment}</p>
                      <p>Type: {userData.type}</p> */}
                    </div>
                  </div>
                )}
                {activeComponent === "editProfile" && (
                  <div>
                    <h1 className="text-center pt-2">Edit Profile</h1><hr />
                    <div className="container d-flex flex-wrap justify-content-between">
                    
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