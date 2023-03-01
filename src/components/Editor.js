import React from 'react'
import ReactQuill from 'react-quill'
import { useOutletContext, useParams } from 'react-router-dom'
import './editor.css'



function Editor() {
  const note = useOutletContext();  
  const [title, setTitle] = React.useState(note.title)

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
        {console.log(note.date)}
        <input
          className='date-input'
          type='datetime-local'
          value={note.date}
          onChange={(e) => note.date = e.target.value}
        />
        </div>
        <div className='buttons'>
        </div>
        {/* <p>{date}</p> */}
      </div>
      <div className='editor-body'>
        {/* <ReactQuill
          value={body}
          onChange={(value) => {
            body = value
          }}
        /> */}
        {/* {body} */}
        </div>
    </div>
  )
}

export default Editor