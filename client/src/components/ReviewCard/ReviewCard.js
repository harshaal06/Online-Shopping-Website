import React from 'react'
import './ReviewCard.css'
import Star from './star.png';
import Review from './review.jpeg';

function ReviewCard({_id, name, message}) {
  return(
  <div className='items3 m-3'>

          <img src={Review} className='review-img' />
          <p className='text-center mt-3'><b>{name}</b></p>

          <img src={Star} className='Star-img' />

          <p className='para5 px-3'>{message}</p>
        </div>
  )
  // return (
  //   <div className="card border-black rounded-4 position-relative review-card m-3 mt-5">
  //       <div className="bg-body-secondary rounded-top-4 sub-card">
  //           <div className="bg-body-secondary rounded-circle border-black position-absolute p-2 border border-black sub-card-img">
  //           <img src={Review} className='w-100'/>
  //           </div>
  //       </div>
  //       <div className="text-center">
  //           <p className="fw-bold mt-3 m-0">{name}</p>
  //           <img src={Star} className="w-50 my-2" />
  //           <p className="px-3">{message}</p>
  //       </div>
  //   </div>
  // )
}

export default ReviewCard