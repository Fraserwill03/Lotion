import React from 'react'
import { useParams } from 'react-router-dom'
import './note.css'
//to fix date, make date prop an array or its own state and have the other value indicate whethere its been set or not then do {date[1]===true ? date[0] : ''}
function Note({ title, date, body, index, selectNote }) {
  const { current } = useParams()
  
  return (
    <div className={'note' + (current === index ? ' active' : '')}
    onClick={ selectNote }>
        <div className='note-header'>{title}</div>
        <div className='note-date'>{date}</div>
        {body === '' ? <div className='note-body'>...</div> : <div className='note-body' dangerouslySetInnerHTML={{__html: body}}></div>}
    </div>
  )
}

export default Note