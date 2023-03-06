import React from 'react'
import ReactQuill from 'react-quill'
import { useState } from 'react'
import { useOutletContext, useParams, useNavigate } from 'react-router-dom'
import Button from './Button'
import 'react-quill/dist/quill.snow.css'
import './editor.css'



function Editor() {
  const [notes, setNotes] = useOutletContext();
  const { index } = useParams();
  const note = notes[parseInt(index) - 1]  
  const [title, setTitle] = useState(note.title)
  const [body, setBody] = useState(note.body)
  const [date, setDate] = useState(note.date[0])
  
  const navigate = useNavigate()

  function deleteNote() {
    setNotes(notes.filter((note) => note.index !== parseInt(index)))
    for (let i = parseInt(index); i < notes.length; i++) {
      if (notes[i].index > parseInt(index)) {
        notes[i].index--
      }
    }
  }

  return (
    <div className='editor'>
      <div className='editor-header'>
        <div className='title-date'>
        <input
          className='title-input'
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className='date-input'
          type='datetime-local'
          value={note.date[0]}
          onChange={(e) => setDate(e.target.value)}
        />
        </div>
        <div className='buttons'>
          <Button 
            type='save-button'
            text='Save'
            onClick={() => {
              note.title = title
              note.body = body
              note.date[0] = date
              note.date[1] = true
              localStorage.setItem("notes", JSON.stringify(notes))
              navigate(`/${note.index}`)
            }} />

            <Button
              type='delete-button'
              text='Delete'
              onClick={() => {
                const confirmation = window.confirm('Are you sure you want to delete this note?')
                if (confirmation) { 
                  deleteNote()
                  navigate(notes.length - 1 > 0 ? '/1' : '/')
                 }
                else return
              }} />

        </div>
      </div>
      <ReactQuill
        className='quill'
        theme='snow'
        value={body}
        onChange={(e) => setBody(e)}
        placeholder='Your note here...'
      />
    </div>
  )
}

export default Editor