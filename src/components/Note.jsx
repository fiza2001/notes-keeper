import React from 'react'
import "./styles/Note.css";


export default function Note(props) {
  function handleDelete(){
    props.onDelete(props.id)
  }
  return (
    <div className='added-note'>
      
      <h4>{props.title}</h4>
      <p>{props.content}</p>
      <button onClick={handleDelete} id='delete-btn'>Delete</button>
    </div>
  )
}
