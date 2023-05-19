import React from 'react'
import DoneIcon from '@mui/icons-material/Done'

import './style.css'

const TickButton = ({ handleClick }) => {
  return (
    <div className='d-flex align-items-center justify-content-center' onClick={handleClick}>
      <DoneIcon className='tick-icon' />
    </div>
  )
}

export default TickButton
