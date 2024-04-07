import React, { useEffect, useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

function AdminUpdateDetails() {

  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [price, setPrice] = useState('');

  const {id} = useParams();
  const {type} = useParams();

  const loadItem = async (id) => {
    if(!id) return

    const response = await axios.get(`${process.env.REACT_APP_API_URL}/${type}/${id}`)

    setUrl(response.data.data.url)
    setTitle(response.data.data.title)
    setContent(response.data.data.content)
    setPrice(response.data.data.price)
  }

  useEffect(()=>{
    loadItem(id)
  }, [id])

  const updateItem = async() => {
    const response = await axios.put(`${process.env.REACT_APP_API_URL}/${type}/${id}`,
    {
      url: url,
      title: title,
      content: content,
      price: price
    })
    toast.success(response.data.message)
    reset()
    window.location.href = '/admin-dashboard'
  }

  const reset = () => {
    setUrl('')
    setTitle('')
    setContent('')
    setPrice('')
  }

  return (
    <div className='body'>
      <h1 className="text-center">Add {type}{id}</h1><hr />
      <div className="container">
          <div className='col-12 col-sm-7 card m-auto shadow p-4 mt-4'>
            <p className="mb-2">Url : </p>
                <input type='text'
                placeholder='Enter title'
                value={url}
                onChange={(e)=>{
                    setUrl(e.target.value)
                }} 
                className='mb-3 p-2 px-3 rounded border border-black'/>

            <p className="mb-2">Title : </p>
            <input type='text'
              placeholder='Enter title'
              value={title}
              onChange={(e)=>{
                setTitle(e.target.value)
              }} 
              className='mb-3 p-2 px-3 rounded border border-black'/>

            <p className="mb-2 col-6">Content : </p>
            <input type='text'
              placeholder='Enter content'
              value={content}
              onChange={(e)=>{
                setContent(e.target.value)
              }} 
              className='mb-3 p-2 px-3 rounded border border-black'/>

            <p className="mb-2 col-6">Price : </p>
            <input type='text'
                placeholder='Enter price'
                value={price}
                onChange={(e)=>{
                    setPrice(e.target.value)
                }} 
                className='mb-3 p-2 px-3 rounded border border-black'/>

            <div className="mb-3">
              <button type='button' onClick={updateItem} class="py-2 rounded border bag">Update</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AdminUpdateDetails