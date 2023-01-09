import React from 'react'

import { menuData, otherData } from '../../config/sideBarData'

import './style.css'

function Sidebar(props) {
  return (
    <div className='sidebar'>
      <div className='menu d-flex flex-column'>
        <p className='menu-heading mt-4'>Menu</p>
        {menuData.map((item, index) => (
          <div key={index.toString()}>
            <p className='title'>{item.title}</p>
          </div>
        ))}
      </div>
      <div className='others d-flex flex-column mt-4'>
        <p className='other-heading'>Others</p>
        {otherData.map((item, index) => (
          <div key={index.toString()}>
            <p className='title'>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
