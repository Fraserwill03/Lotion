import React from 'react'
import ReactQuill from 'react-quill'
import { useOutletContext, useParams, useNavigate } from 'react-router-dom'
import Button from './Button'
import 'react-quill/dist/quill.bubble.css';
import './view.css'

function View() {
  const [notes, setNotes] = useOutletContext();
  const { index } = useParams();
  const note = notes[parseInt(index) - 1]
  const navigate = useNavigate()

  function deleteNote() {
    setNotes(notes.filter((note) => note.index !== parseInt(index)))
    for (let i = parseInt(index); i < notes.length; i++) {
      if (notes[i].index > parseInt(index)) {
        notes[i].index--
      }
    }
  }
  
  function formatDateView(dateString) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const year = dateString.substring(0, 4);
    const month = months[parseInt(dateString.substring(5, 7)) - 1];
    const day = parseInt(dateString.substring(8, 10)).toString(); //removes leading 0
    const hour = parseInt(dateString.substring(11, 13));
    const minutes = dateString.substring(14, 16);
    const time = hour > 12 ? `${hour - 12}:${minutes} PM` : `${hour}:${minutes} AM`
    return `${month} ${day}, ${year} at ${time}`
}


  return (
    <div className='view'>
      <div className='view-header'>
        <div className='title-date'>
          <h1>{note.title}</h1>
          <div className='date'>{formatDateView(note.date[0])}</div>
        </div>
        <div className='view-buttons'>
          <Button
            type='edit-button'
            text='Edit'
            onClick={() => navigate(`/${index}/edit`)}
          />
          <Button
            type='delete-button'
            text='Delete'
            onClick={() => {
              const confirmation = window.confirm('Are you sure you want to delete this note?')
              if (confirmation) { 
                navigate(notes.length -1 > 0 ? '/1' : '/')
                deleteNote()
                }
              else return
            }} />
        </div>
      </div>
        <ReactQuill
          className='viewer'
          theme='bubble'
          value={note.body}
          readOnly={true}
        />
    </div>
  )
}

export default View