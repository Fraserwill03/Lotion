import React from 'react'
import { useParams } from 'react-router-dom'
import './note.css'

function Note({ title, date, body, index, selectNote }) {
  const { current } = useParams()
  
  return (
    <div className={'note' + (current === index ? ' active' : '')}
    onClick={ selectNote }>
        <div className='note-header'>{title}</div>
        <div className='note-date'></div>
        <div className='note-body'>{body === '' ? '...' : body}</div>
    </div>
  )
}

export default Note