import React from 'react'
import './note.css'

function Note({ current, title, date, body, index, selectNote }) {
  return (
    <div className={'note' + (current === index ? ' active' : '')}
    onClick={ selectNote }>
        <div className='note-header'>{title}</div>
        <div className='note-date'>{date}</div>
        <div className='note-body'>{body === '' ? '...' : body}</div>
    </div>
  )
}

export default Note