import React from 'react'
import ReactQuill from 'react-quill'
import { useOutletContext } from 'react-router-dom'
import './editor.css'



function Editor() {
  const [notes] = useOutletContext()

  return (
    <div className='editor'>
      <div className='editor-header'>
        <p>{notes}</p>
        <p>{date}</p>
      </div>
      <div className='editor-body'>
        {/* <ReactQuill
          value={body}
          onChange={(value) => {
            body = value
          }}
        /> */}
        {body}
        </div>
    </div>
  )
}

export default Editor