import React from 'react'
import ReactQuill from 'react-quill'
import { useOutletContext, useParams } from 'react-router-dom'
import './editor.css'



function Editor() {
  const note = useOutletContext();  

  return (
    <div className='editor'>
      <div className='editor-header'>
        <p>{note.title}</p>
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