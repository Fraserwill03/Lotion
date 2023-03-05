import React from 'react'
import { useNavigate } from "react-router-dom";
import Button from './Button'
import Note from './Note'
import './menu.css'

function Menu( { addNote, notes, current} ) {
  const navigate = useNavigate();

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
              index={note.index}
              key={note.id}
              title={note.title}
              body={note.body}
              date={note.date}
              current={parseInt(current)}
              selectNote={() => navigate(`/${note.index}`)}
              />)
            })) : <p className='default-menu'>No notes yet</p>}
        </div>
    </div>
  )
}

export default Menu