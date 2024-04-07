import React from 'react'
import './ReviewCard.css'
import Start from './favourite.png';
import Review from './review.png';

function ReviewCard({_id, name, message}) {
  return (
    <div className="card border-black rounded-4 position-relative review-card m-3 mt-5">
        <div className="bg-body-secondary rounded-top-4 sub-card">
            <div className="bg-body-secondary rounded-circle border-black position-absolute p-2 border border-black sub-card-img">
            <img src={Review} className='w-100'/>
            </div>
        </div>
        <div className="text-center">
            <p className="fw-bold mt-3 m-0">{name}</p>
            <img src={Start} className="w-50 my-2" />
            <p className="px-3">{message}</p>
        </div>
    </div>
  )
}

export default ReviewCard