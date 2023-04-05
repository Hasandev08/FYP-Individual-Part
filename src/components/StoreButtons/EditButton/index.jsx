import React from 'react'

import './style.css'

function EditButton({ handleClick }) {
  return (
    <button className='store-edit-button' onClick={handleClick}>
      Edit
    </button>
  )
}

export default EditButton
