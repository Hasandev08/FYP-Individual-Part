import React, { useState } from 'react'

import OrderTable from '../../components/Tables/OrderTable'
import SearchBar from '../../components/common/SearchBar'
import Sidebar from '../../components/common/SideBar'

import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import StarIcon from '@mui/icons-material/Star'

import { headCells, tableData } from '../../config/tableData'

import './style.css'

function Orders() {
  const [filterTableData, setFilterTableData] = useState(tableData)

  const handleChange = (val) => {
    const filteredData = tableData.filter(
      (item) =>
        item.customer.toLowerCase().includes(val.toLowerCase()) ||
        item.address.toLowerCase().includes(val.toLowerCase()) ||
        item.date.includes(val) ||
        item.status.toLowerCase().includes(val.toLowerCase())
    )
    setFilterTableData(filteredData)
  }

  return (
    <div className='screen d-flex'>
      <div className='common-sidebar'>
        <Sidebar />
      </div>
      <div className='orders d-flex flex-column px-5'>
        <div className='order-search my-4'>
          <SearchBar handleChange={handleChange} />
        </div>
        <div className='title-row d-flex justify-content-between px-4'>
          <h5 className='title-heading pt-3'>ShopiRent</h5>
          <div className='current-balance d-flex flex-column'>
            <p className='balance-text'>Your Balance</p>
            <h5 className='title-heading'>$2,000.945</h5>
          </div>
        </div>
        <div className='order-stats d-flex justify-content-between my-4 px-4'>
          <div className='customer-orders d-flex flex-wrap pl-3'>
            <div className='order-icon pt-2'>
              <PeopleAltIcon sx={{ color: '#314e52' }} />
            </div>
            <div className='customer-stats d-flex flex-column'>
              <p className='orders-subtotal'>20</p>
              <p className='order-subheading'>Customers</p>
            </div>
          </div>
          <div className='deliveries d-flex flex-wrap'>
            <div className='order-icon pt-2'>
              <ShoppingCartIcon sx={{ color: '#314e52' }} />
            </div>
            <div className='delivery-stats d-flex flex-column'>
              <p className='orders-subtotal'>12</p>
              <p className='order-subheading'>Delivered</p>
            </div>
          </div>
          <div className='ratings d-flex flex-wrap'>
            <div className='order-icon pt-2'>
              <StarIcon sx={{ color: '#314e52' }} />
            </div>
            <div className='rating-stats d-flex flex-column'>
              <p className='orders-subtotal'>98.4%</p>
              <p className='order-subheading'>Satisfaction Rating</p>
            </div>
          </div>
        </div>
        <div className='orders-table'>
          <OrderTable headCells={headCells} filterTableData={filterTableData} />
        </div>
      </div>
    </div>
  )
}

export default Orders
