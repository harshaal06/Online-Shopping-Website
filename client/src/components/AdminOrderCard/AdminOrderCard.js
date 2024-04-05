import React from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom'; 
import DeleteIcon from "./../AdminItemCard/delete-icon.png";
import UpdateIcon from "./../AdminItemCard/edit-icon.png";
import "./AdminOrderCard.css"

function AdminOrderCard({_id, url, title, price, name, address, city, state, code, mob, email, pass, payment, type, loadItems}) {

  const deleteItem = async () => {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/order/${_id}`)
    toast.success(response.data.message)
    loadItems()
  }

  return (
    <div className="border border-dark rounded mb-3 card-with position-relative" >
        <div className="row g-0">
            <div className="col-md-4">
            <img src={url} className="img-fluid rounded-start p-3" />
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p>name: {name}</p>
                <p>address: {address}</p>
                <p>city: {city}</p>
                <p>state: {state}</p>
                <p>code: {code}</p>
                <p>mob: {mob}</p>
                <p>email: {email}</p>
                <p>{pass}</p>
                <p>payment: {payment}</p>
                <p>type: {type}</p>
                <p className="card-text"><small className="text-body-secondary">Rs. {price}</small></p>
                <img src={DeleteIcon} 
                    className='bg-primary-subtle position-absolute delete-icon shadow-sm border border-dark-subtle p-2 rounded-circle'
                    alt='delete-icon'
                    onClick={deleteItem}
                />
                <Link to={`/update/${_id}`} >
                <img src={UpdateIcon} 
                    className='bg-primary-subtle position-absolute update-icon shadow-sm border border-dark-subtle p-2 rounded-circle'
                    alt='delete-icon'
                    />
                </Link>
            </div>
            </div>
        </div>
    </div>
  )
}

export default AdminOrderCard