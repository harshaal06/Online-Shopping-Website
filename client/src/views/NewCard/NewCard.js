
import './NewCard.css'
import Navbar from '../../components/Navbar/Navbar'
import React, { useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';


function NewCard() {

  //url,title,content,price

  const [url,setUrl] = useState('');
  const [title,setTitle] = useState('');
  const [content,setContent] = useState('');
  const [price,setPrice] = useState('');

  const addNote =async ()=>{
    const response = await axios.post(`${process.env.REACT_APP_URL}/laptop`,
    {
      url : url,
      title : title,
      content : content,
      price : price
    })
   toast.success(response.data.message)
    setUrl('')
    setTitle('')
    setContent('')
    setPrice('')
  }
  return (
    <div>
      <Navbar />

      <div>
      <h1 className='hading'>New Note</h1>

       <form className='from-newnote'>
        <h1>Enter The img Url</h1>
      <input type='text'
      placeholder='Title'
      value={title}
      onChange={(e)=>{
         setTitle(e.target.value)
      }}
      className='input-title'/>


<input type='text'
      placeholder='Url'
      value={url}
      onChange={(e)=>{
         setUrl(e.target.value)
      }}
      className='input-title'/>
     
      

      <input type='text'


      placeholder='Content'
      value={content}
      onChange={(e)=>{
        setContent(e.target.value)
      }}
      className='input-co'/>


<input type='text'
      placeholder='Price'
      value={price}
      onChange={(e)=>{
         setPrice(e.target.value)
      }}
      className='input-title'/>



<button type='button' onClick={addNote} className='btn'>Save</button>

</form>

     
    </div>
        
    </div>
  )
}

export default NewCard