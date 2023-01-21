import React from 'react'

import DeleteButton from '../StoreButtons/DeleteButton'
import EditButton from '../StoreButtons/EditButton'

import './style.css'

function StoreCards({ storeData }) {
  return (
    <div className='storecards d-flex flex-wrap'>
      {storeData.map((item, index) => (
        <div key={index.toString()}>
          <div className='card'>
            <div className='image-example'></div>
            {/* <img src='...' class='card-img-top' alt='...' /> */}
            <div className='card-body'>
              <h5 className='card-title'>{item.product_name}</h5>
              <p className='card-text'>{item.description}</p>
            </div>
            <div className='store-card-buttons d-flex justify-content-around mb-2'>
              <EditButton />
              <DeleteButton />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StoreCards
