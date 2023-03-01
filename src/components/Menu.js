import React from 'react'
import { useNavigate } from "react-router-dom";
import Button from './Button'
import Note from './Note'
import './menu.css'

function Menu( { addNote, notes, current } ) {
  const navigate = useNavigate();
  function formatDate(inputDate) {
    
  }

  return (
    <div className='menu'>
        <div className='menu-header'>
            <h1>Notes</h1>
            <Button 
                type='add-note-button'
                text='+'
                onClick={addNote} />
        </div>
        <div className='menu-body'>
            {notes.length > 0 ? (notes.map((note) => {
              return (<Note 
              current={current}
              title={note.title}
              body={note.body}
              date={note.date.toString()}
              key={note.id}
              selectNote={() => navigate(`/${note.index}`)}
              />)
            })) : <p className='default-menu'>No notes yet</p>}
        </div>
    </div>
  )
}

export default Menu