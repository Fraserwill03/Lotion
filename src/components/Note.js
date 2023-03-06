import React from 'react'
import 'react-quill/dist/quill.bubble.css'
import './note.css'

function Note({ title, date, body, index, selectNote, current }) {
  
  function formatDateNote(dateString) {
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
    <div className={'note' + (current === index ? ' active' : '')}
    onClick={ selectNote }>
        <div className='note-header'>{title}</div>
        <div className='note-date'>{date[1] === true ? formatDateNote(date[0]) : ''}</div>
        {body === '' ? <div className='note-body'>...</div> : <div className='note-body' dangerouslySetInnerHTML={{__html: body}}></div>}
    </div>
  )
}

export default Note