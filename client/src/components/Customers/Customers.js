import React from 'react'
import './Customers.css'

function Customers({ name, imgurl, city}) {
  return(
    <div className='card rounded-5 w-auto mt-4 shadow position-relative'>
        <div>
            <img src={imgurl} className='card-img-cu border border-dark'/>
            <h5 className='d-inline m-3'>{name}</h5>
            <p className='position-absolute top-50 start-50 mt-1 color'>{city}</p>
        </div>
        
        {/* <div className='row'>
            <div className='col-3'>
            <img src={imgurl} className='card-img-cu rounded-5'/>
            </div>
            <h5 className='col-9 text-center mt-4'>{name}</h5>
        </div> */}
        
        
    </div>
  )
}

export default Customers