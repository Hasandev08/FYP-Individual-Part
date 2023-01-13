import React from 'react'

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'

import './style.css'

function Cards({ revenue }) {
  return (
    <div className='cards container-fluid d-flex'>
      <div className='row'>
        <div className='first-card col-md-3 col-6 d-flex align-items-center m-3'>
          <div className='first-card-icon'>
            <ShoppingBagIcon />
          </div>
          <div className='card-entries d-flex flex-column'>
            <p className='profit'>Total Profit</p>
            <p className='money'>$54433</p>
          </div>
        </div>
        <div className='second-card col-md-3 col-6 d-flex align-items-center m-3'>
          <div className='second-card-icon'>
            <ShoppingBagIcon />
          </div>
          <div className='card-entries d-flex flex-column'>
            <p className='profit'>Total Cost</p>
            <p className='money'>$54433</p>
          </div>
        </div>
        <div className='third-card col-md-3 col-6 d-flex align-items-center m-3'>
          <div className='third-card-icon'>
            <ShoppingBagIcon />
          </div>
          <div className='card-entries d-flex flex-column'>
            <p className='profit'>Total Revenue</p>
            <p className='money'>${revenue}</p>
          </div>
        </div>
        <div className='fourth-card col-md-3 col-6 d-flex align-items-center m-3'>
          <div className='fourth-card-icon'>
            <ShoppingBagIcon />
          </div>
          <div className='card-entries d-flex flex-column'>
            <p className='profit'>Total Quantity</p>
            <p className='money'>$54433</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
