import React from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom'; 
import DeleteIcon from "./../AdminItemCard/delete-icon.png";
import "./AdminContactCard.css"

function AdminContactCard({_id, name, email, message, loadItems, type, msg}) {

  const deleteItem = async () => {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/${type}/${_id}`)
    toast.success(response.data.message)
    loadItems()
  }

  return (
    <div className="border card border-dark card shadow shadow-sm rounded py-2 px-3 mb-3 card-with position-relative" >
        <p className="fs-5 m-1"><b>Name:</b> {name}</p>
        {email && (
          <p className="m-1"><b>Email:</b> <a href={`mailto:${email}`}>{email}</a></p>)}
        <p className="m-1 text-body-secondary"><b>{msg}:</b> {message}</p>
        <img src={DeleteIcon}
            className='bg-primary-subtle position-absolute delete-icon shadow-sm border border-dark-subtle p-2 rounded-circle'
            alt='delete-icon'
            onClick={deleteItem}
        />
    </div>
  )
}

export default AdminContactCard