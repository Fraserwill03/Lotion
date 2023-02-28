import React from 'react'
import PropTypes from 'prop-types'
import './note.css'

function Note({ id, title, date, body, index, selectNote }) {
  return (
    <div className='note'
    onClick={ selectNote }>
        <div className='note-header'>{title}</div>
        <div className='note-date'>{date}</div>
        <div className='note-body'>{body === '' ? '...' : body}</div>
    </div>
  )
}

export default Note