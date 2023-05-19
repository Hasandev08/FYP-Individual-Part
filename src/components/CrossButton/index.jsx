import React from 'react'
import ClearIcon from '@mui/icons-material/Clear'

import './style.css'

const CrossButton = ({ handleClick }) => {
  return (
    <div className='d-flex align-items-center justify-content-center' onClick={handleClick}>
      <ClearIcon className='cross-icon' />
    </div>
  )
}

export default CrossButton
