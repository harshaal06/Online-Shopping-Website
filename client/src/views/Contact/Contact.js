import "./Contact.css"
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
import Email from "../../views/Contact/email.png"
import phone from "../../views/Contact/phone.png"
import location from "../../views/Contact/location.png"
import shape from "../../views/Contact/shape.png"
import Navbar from '../../components/Navbar/Navbar'
import Footer from "../../components/Footer/Footer"

export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const addContact = async() => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/contact`,
    {
      name, email, message
    })
    toast.success(response.data.message)
    reset()
  }

  const reset = () => {
    setEmail('');
    setMessage('');
    setName('');
  }
    
    
    const inputs = document.querySelectorAll(".input");
  
    function focusFunc() {
      let parent = this.parentNode;
      parent.classList.add("focus");
    }
    
    function blurFunc() {
      let parent = this.parentNode;
      if (this.value == "") {
        parent.classList.remove("focus");
      }
    }
    
    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });
  return (
    <div>
      <Navbar/>
      <div className="container22">
      <span className="big-circle"></span>
      <img src={shape} className="square" alt="" />
      <div className="form22">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
          I'm here to help! Feel free to ask any questions or share what you'd like to discuss, and I'll do my best to assist you.
          </p>

          <div className="info22">
            <div className="information22">
              <img src={location} className="icon22" alt="" />
              <p>84, InfoTeachShop, Narayana Residency, Ward No 3, Prasad Colony, Nagpur - 441108</p>
            </div>
            <div className="information22">
              <img src={Email} className="icon22" alt="surajhapse1@gmail.com" />
              <p><a href="mailto:harshalaglawe06@gmail.com" class="text-decoration-none"> InfoTechShop@gmail.com</a></p>
            </div>
            <div className="information22">
              <img src={phone} className="icon22" alt="" />
              <p>+91 8010564317</p>
            </div>
          </div>

          <div className="social-media22">
            <p>Connect with us :</p>
            <div className="social-icons22">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" className="contact-us-form" autoComplete="off">
            <h3 className="title22">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" placeholder='Username'
              value={name}
              onChange={(e)=>{
                setName(e.target.value)
              }}
              className="input" />
              
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" placeholder='Email'
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
              className="input" />
              <span>Email</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" placeholder='Message'
              value={message}
              onChange={(e)=>{
                setMessage(e.target.value)
              }}
              className="input"></textarea>
              
              <span>Message</span>
            </div>
            <div className="text-center mt-4">
              <button type="button"
              onClick={addContact} className="px-5 py-2 rounded bag-btn">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}
