import React from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom'; 
import DeleteIcon from "./delete-icon.png";
import UpdateIcon from "./edit-icon.png";
import "./ItemCard.css"

function NoteCard({_id, url, title, content, price, loadItems, type}) {

  const deleteItem = async () => {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/${type}/${_id}`)
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
            <div className="card-body text-center text-md-start">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                <p className="card-text"><small className="text-body-secondary">Rs. {price}</small></p>
                <img src={DeleteIcon} 
                    className='bg-primary-subtle position-absolute delete-icon shadow-sm border border-dark-subtle p-2 rounded-circle'
                    alt='delete-icon'
                    onClick={deleteItem}
                />
                <Link to={`/admin-update-details/${type}/${_id}`} >
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

export default NoteCard