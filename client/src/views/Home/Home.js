import React, { useEffect, useState } from 'react'
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
import { Link } from 'react-router-dom'
import axios from 'axios';
import ReviewCard from './../../components/ReviewCard/ReviewCard';


function App() {

  const [reviews, setReviews] = useState([]);

  const loadReview = async () =>{
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/review`);

      setReviews(response.data.data);
  }

  useEffect(()=>{
      loadReview();
  }, []);

  return (
    <div>
      <Navbar />
      <div className='p-5'>
        <div className='container'>
          <div className='row mt-3'>
            <div className='col-12 col-md-6 text-center text-md-start mt-md-5 pt-md-2'>
              <h1>Our Best Collection For You</h1>
              <h2 className='fw-semibold'>Laptops, Mobiles and Tablets</h2>
              <p>Feature packed at better value than ever powerful sensors to monitor your fitness</p>
              <Link className='text-decoration-none' to='/tablet'>
              <button className='btn'>Shop Now</button>
              </Link>
            </div>
            <div className='col-12 col-md-6'>
              <img src={Image} className='w-100 mt-5 mt-md-0' />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='c-bag p-5'>
          <h1 className='text-center mb-5'>Trending Categories</h1>
          <div className='container'>
            <div className='d-flex justify-content-evenly flex-wrap'>
              <Link className='text-decoration-none' to='/mobile'>
              <div className='card wh mt-4 mt-md-0 p-3 py-4 shadow rounded-4'>
                <img src={Iphone} className='mx-auto img-whh' />
                <h3 className='text-center'>Mobiles</h3>
              </div>
              </Link>
              <Link className='text-decoration-none' to='/laptop'>
              <div className='card wh mt-4 mt-md-0 p-3 py-4 shadow rounded-4'>
                <img src={Laptop} className='mx-auto img-whh mt-4' />
                <h3 className='text-center mt-5'>Laptops</h3>
              </div>
              </Link>
              <Link className='text-decoration-none' to='/tablet'>
              <div className='card wh mt-4 mt-md-0 p-3 py-4 shadow rounded-4'>
                <img src={Tablet} className='mx-auto img-whh mt-4 mb-1' />
                <h3 className='text-center mt-5'>Tablets</h3>
              </div>
              </Link>
              <div className='card wh mt-4 mt-md-0 p-3 py-4 shadow rounded-4'>
                <img src={Buds} className='mx-auto img-whh' />
                <h3 className='text-center'>Speakers</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='p-5'>
          <h1 className='text-center mb-5'>Our Customer Reviews</h1>
          <div className='container'>
          <div className="d-flex justify-content-evenly flex-wrap">
          {
            reviews.map((review) => {
              const {_id, name, message} = review;
              return( <ReviewCard key={_id} _id={_id} name={name} message={message} /> )
            })
          }
          </div>
          </div>
        </div>
      </div>
      <div>
        <div className='c-bag p-3 p-md-5'>
          <h1 className='text-center mb-5 color'>Frequently Asked's Question's</h1>
          <div className='container'>
            <div className='row mx-0 mx-md-5 px-0 px-md-5'>
            <details className=''>
              <summary className="border p-2 px-4 bg-primary-subtle rounded border-dark ">What is your return/exchange policy?</summary>
              <div className='p-4 bg-success-subtle'>Another pressing question that every retail brand is tired of answering: how do you handle returns and exchanges? In addition to having a dedicated section or page regarding the return and exchange process on your website (do you have one yet?), you should have a question and answer on your FAQ page that explains it to your shoppers.</div>
            </details>
            <details className=''>
              <summary className="border p-2 px-4 bg-primary-subtle rounded border-dark ">What payment methods do you accept?</summary>
              <div className='p-4 bg-success-subtle'>There are a growing number of options for paying for transactions online. From credit cards and debit cards to electronic wallets, people want more and more versatility in their online shopping. You don’t have to offer it all, but make sure that you’re explicit about what you do accep</div>
            </details>
            <details className=''>
              <summary className="border p-2 px-4 bg-primary-subtle rounded border-dark ">Do you have gift packaging options?</summary>
              <div className='p-4 bg-success-subtle'>People love buying gifts online, and especially if they can ship them straight to the recipient. Therefore, they’ll often want an option where the invoice is left out of the box or pricing is excluded. Perhaps they’re shipping it to themselves but want a gift receipt for the person getting it</div>
            </details>
            <details className=''>
              <summary className="border p-2 px-4 bg-primary-subtle rounded border-dark ">How do I cancel/modify an order?</summary>
              <div className='p-4 bg-success-subtle'>This might seem like something that you want to deter, but it’s bound to happen in every business. Therefore, the best thing that you can do, again, is to be transparent and honest with your audience about how it works.</div>
            </details>
            </div>
          </div>
        </div>
      </div>
      <Footer />

</div>




  )
}

export default App