import React, { useState } from "react";
import "./styles/NewList.css";

export default function NewList(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });

  function handleNote(event) {
    const name = event.target.name;
    const value = event.target.value;
    setNewNote((prevVal) => {
      return { ...prevVal, [name]: value };
    });
  }

  function submitNote(event){
    event.preventDefault();
    props.onAdd(newNote)
    setNewNote({
      title : "",
      content : ""
    })
  }

  return (
    <div className="content-box">
      <form onSubmit={submitNote}>
        <input
          onChange={handleNote}
          name="title"
          id="form-text"
          type="text"
          placeholder="Title"
          value={newNote.title}
        />
        <br />
        <textarea
          onChange={handleNote}
          id="form-text"
          name="content"
          cols="50"
          placeholder="Take your note..."
          value={newNote.content}
        ></textarea>
        <br />
        <br />
        <button onClick={submitNote} id="form-button">Add</button>
      </form>
    </div>
  );
}
