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
import Footer from "../../components/Footer/Footer"



function App() {

  return (
    <div>
      <Navbar />


     <div className='container1'> 
      <div className='items'>
        
        <p className='para'>Our Best Collection For You</p>
      <div className='container1'>
        <div className='items'>
          <p className='para'>Our Best Collection For You</p>
 

          <h2 className='heading'>Laptop Watch Series</h2>

          <p className='para2'>Feature packed at better value than ever powerful sensors to monitor your fitness</p>

          <button className='btn'>Shop Now</button>


        </div>
        <div className='items'>

          <img src={Image} className='img' />
        </div>
      </div>
      </div>

      <div className='Container2'>

        <p className='head2'>Trending Categories</p>
        <div className='sub-container'>
          <div className='items2'>

            <img src={Iphone} className='iphone-img' />
            <p style={{ textAlign: "center" }} >IPhone</p>
          </div>
          <div className='items2'>
            <img src={Laptop} className='iphone-img1' />
            <p style={{ textAlign: "center", marginTop: "35px" }} >Laptops</p>
          </div>
          <div className='items2'>
            <img src={Buds} className='iphone-img' />
            <p style={{ textAlign: "center", marginTop: "25px" }}>Speakers</p>
          </div>
          <div className='items2'>
            <img src={Tablet} className='iphone-img3' />
            <p style={{ textAlign: "center", marginTop: "70px" }}>Tablets</p>
          </div>



        </div>





      </div>
      <p className='head3'>Customer Reviews</p>


      <div className='review'>
        <div className='items3'>

          <img src={Review} className='review-img' />

          <img src={Star} className='Star-img' />

          <p className='para5'>"My experience with Para has been mixed. On one hand, I appreciate its compact size and portability, making it convenient to carry around. </p>
        </div>
        <div className='items3'>
          <img src={Review} className='review-img' />
          <img src={Star} className='Star-img' />
          <p className='para5'>"I was initially excited to try out Para, but unfortunately, it fell short of my expectations. While the design is stylish, I found the functionality to be lacking. </p>

        </div>
        <div className='items3'>
          <img src={Review} className='review-img' />
          <img src={Star} className='Star-img' />
          <p className='para5'>"I particularly appreciate its versatility, allowing me to seamlessly switch between different modes depending on my needs. </p>


        </div>





      </div>

      <div className='Faq-section'>
        <h1 className='faq-head'>Frequently Asked's Question's</h1>


        <details className='details'>
          <summary className="summary">What is your return/exchange policy?</summary>
          <div className='block'>Another pressing question that every retail brand is tired of answering: how do you handle returns and exchanges? In addition to having a dedicated section or page regarding the return and exchange process on your website (do you have one yet?), you should have a question and answer on your FAQ page that explains it to your shoppers.</div>
        </details>

        <details className='details'>
          <summary className="summary">What payment methods do you accept?</summary>
          <div className='block'>There are a growing number of options for paying for transactions online. From credit cards and debit cards to electronic wallets, people want more and more versatility in their online shopping. You don’t have to offer it all, but make sure that you’re explicit about what you do accep</div>
        </details>

        <details className='details'>
          <summary className="summary">Do you have gift packaging options?</summary>
          <div className='block'>People love buying gifts online, and especially if they can ship them straight to the recipient. Therefore, they’ll often want an option where the invoice is left out of the box or pricing is excluded. Perhaps they’re shipping it to themselves but want a gift receipt for the person getting it</div>
        </details>
        <details className='details'>
          <summary className="summary">How do I cancel/modify an order?</summary>
          <div className='block'>This might seem like something that you want to deter, but it’s bound to happen in every business. Therefore, the best thing that you can do, again, is to be transparent and honest with your audience about how it works.</div>
        </details>
      </div>
      <Footer />
    </div>

</div>




  )
}

export default App