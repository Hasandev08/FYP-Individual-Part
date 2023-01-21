import React from 'react'

import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import TableRowsIcon from '@mui/icons-material/TableRows'

import './style.css'

function ToggleButton({ handleClick, toggled }) {
  return (
    <div onClick={handleClick} className={toggled ? 'toggled-left' : 'toggle'}>
      <div className='notch'>
        <div className='icon'>
          {toggled ? (
            <GridViewOutlinedIcon sx={{ color: 'white' }} fontSize='small' />
          ) : (
            <TableRowsIcon sx={{ color: 'white' }} fontSize='small' />
          )}
        </div>
      </div>
    </div>
  )
}

export default ToggleButton
