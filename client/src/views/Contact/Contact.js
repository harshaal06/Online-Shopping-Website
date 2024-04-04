import React from 'react'
import "./Contact.css"
import email from "../../contact/email.png"
import phone from "../../contact/phone.png"
import location from "../../contact/location.png"
import shape from "../../contact/shape.png"
export default function Contact() {
    
    
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
              <p>Rahuri Tal-Rahuri, Dist-A.nagar,State-Maharashtra 413705</p>
            </div>
            <div className="information22">
              <img src={email} className="icon22" alt="surajhapse1@gmail.com" />
              <p>ganeshwagh580@gmail.com</p>
            </div>
            <div className="information22">
              <img src={phone} className="icon22" alt="" />
              <p>+91 7057231961</p>
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
              <input type="text" name="name" className="input" />
              <label htmlFor="">Username</label>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" />
              <label htmlFor="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" />
              <label htmlFor="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input"></textarea>
              <label htmlFor="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btn22" />
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}
