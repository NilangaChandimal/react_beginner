import React from 'react'
import './BodyContent.css'

function BodyContent(props) {
  return (
    <>
      <div id="bodycontent">
        <div className='content'>
          <h3>Main Content</h3>
          {props.children}
          </div>
        </div>
    </>
  )
}

export default BodyContent
