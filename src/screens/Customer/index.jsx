import React from 'react'

import CrossButton from '../../components/CrossButton'
import Sidebar from '../../components/common/SideBar'
import TickButton from '../../components/TickButton'

import { useLocation, useNavigate } from 'react-router-dom'

import './style.css'

const Customer = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const customer = location.state

  return (
    <div className='screen d-flex'>
      <div className='common-sidebar'>
        <Sidebar />
      </div>
      <div className='customer-side d-flex justify-content-center align-items-center'>
        <div className='customer-background d-flex flex-column align-items-center justify-content-around'>
          <div className='customer-img'></div>
          <div className='customer-details d-flex justify-content-around'>
            <div className='details-heading'>
              <p>Customer Name:</p>
              <p>Product Name:</p>
              <p>Quantity:</p>
              <p>From:</p>
              <p>To:</p>
              <p>Price:</p>
              <p>Address:</p>
              <p>Mobile: </p>
            </div>
            <div className='details'>
              <p>{customer.customer_name}</p>
              <p>{customer.product_name}</p>
              <p>{customer.quantity}</p>
              <p>{customer.from}</p>
              <p>{customer.to}</p>
              <p>{customer.r_price}/-</p>
              <p></p>
              <p></p>
            </div>
          </div>
          <div className='customer-buttons d-flex justify-content-around w-100'>
            <CrossButton handleClick={() => navigate('/approvals')} />
            <TickButton handleClick={() => navigate('/approvals')} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customer
