import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import NewList from "./components/NewList.jsx";
import Note from "./components/Note.jsx";
import {useState} from "react";


function App() {
  const [inputNotes, setInputNotes] = useState([]);

  function addNote(myNote){
    setInputNotes((prevVal) => {
      return [...prevVal, myNote]
    })
  }

  function deleteNote(id){
    setInputNotes((prevVal) => {
      return prevVal.filter((filteredNote, index) =>{
        return index !== id
      })
    })
  }
  
  return (
    <>
      <Header />
      <br />
      <NewList onAdd={addNote}/>
      {inputNotes.map((filteredNote, index) => {
        return (
          <Note key={index} id={index} title={filteredNote.title} content={filteredNote.content} onDelete={deleteNote}  />
        );

      })
    }
      <Footer />
    </>
  );
}
export default App;
