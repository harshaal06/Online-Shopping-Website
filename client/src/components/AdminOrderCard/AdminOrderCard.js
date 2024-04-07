import React from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import DeleteIcon from "./../AdminItemCard/delete-icon.png";
import UpdateIcon from "./../AdminItemCard/edit-icon.png";
import "./AdminOrderCard.css"

function AdminOrderCard({ _id, url, title, content, price, name, address, city, state, code, mob, email, pass, payment, type, loadItems }) {

  const deleteItem = async () => {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/order/${_id}`)
    toast.success(response.data.message)
    loadItems()
  }

  return (
    <div className="border w-100 border-dark rounded mb-3 py-3 position-relative" >
      <div className="row">
        <div className="col-4 border-end border-dark">
          <img src={`https://i.pravatar.cc/?img=${mob.substring(0, 2)}`} className="col-6 m-4 imd-pro d-block mx-auto rounded-circle border border-dark" />
          <p className="fs-2 m-0 text-center">{name}</p>
        </div>
        <div className="col-5 border-end border-dark">
          <div className="row">
            <h5>Contact Details</h5>
            <p className="my-1 mx-3"><span className="fw-semibold">Email: </span>{email}</p>
            <p className="my-1 mx-3"><span className="fw-semibold">Mob No.: </span>{mob}</p>
            <p className="my-1 mx-3"><span className="fw-semibold">Password: </span>{pass}</p>
          </div><hr />
          <div className="row">
            <h5>Address Details</h5>
            <p className="my-1 mx-3"><span className="fw-semibold">Address: </span>{address}</p>
            <p className="my-1 mx-3"><span className="fw-semibold">City: </span>{city}</p>
            <p className="my-1 mx-3"><span className="fw-semibold">State: </span>{state}-{code}</p>
          </div>
        </div>
        <div className="col-3 text-center">
            <img src={url} className="col-5 mb-3 rounded-circle border border-dark" />
              <p className='m-1'>{title}</p>
              <p className='m-2 content-wth'>{content}</p>
              <p>Price: Rs. {price}</p>
              <p>Payment mode: {payment}</p>
              <p>Type: {type}</p>
        </div>
      </div>
           <img src={DeleteIcon}
            className='bg-primary-subtle position-absolute delete-icon shadow-sm border border-dark-subtle p-2 rounded-circle'
            alt='delete-icon'
            onClick={deleteItem}
          />
    </div>
  )
}

export default AdminOrderCard