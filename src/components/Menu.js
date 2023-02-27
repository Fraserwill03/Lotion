import React from 'react'
import Button from './Button'

function Menu( { addNote } ) {
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
        </div>
    </div>
  )
}

export default Menu