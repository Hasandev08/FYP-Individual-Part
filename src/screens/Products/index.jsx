import React, { useState } from 'react'

import ReportTables from '../../components/common/ReportTables'
import SearchBar from '../../components/common/SearchBar'
import Sidebar from '../../components/SideBar'
import { productData, productHeader } from '../../config/productData'

import { useNavigate } from 'react-router-dom'

import './style.css'

function Products() {
  const navigate = useNavigate()
  const [filterProductData, setFilterProductData] = useState(productData)

  const handleChange = (val) => {
    const filteredData = productData.filter(
      (item) =>
        item.p_id.toString().includes(val.toString()) ||
        item.product_name.toLowerCase().includes(val.toLowerCase()) ||
        item.quantity.toString().includes(val.toString()) ||
        item.p_price.toString().includes(val.toString()) ||
        item.s_price.toString().includes(val.toString()) ||
        item.size.toLowerCase().includes(val.toLowerCase()) ||
        item.company_name.toLowerCase().includes(val.toLowerCase())
    )
    setFilterProductData(filteredData)
  }

  return (
    <div className='screen d-flex'>
      <div className='common-sidebar'>
        <Sidebar />
      </div>
      <div className='products d-flex flex-column'>
        <div className='products-search my-4'>
          <SearchBar handleChange={handleChange} />
        </div>
        <div className='add-product'>
          <button
            type='button'
            className='add-product-button'
            onClick={() => navigate('/products/add')}
          >
            Add
          </button>
        </div>
        <div className='products-report mx-5'>
          <ReportTables
            check
            listData={filterProductData}
            productCheck
            tableHeader={productHeader}
          />
        </div>
      </div>
    </div>
  )
}

export default Products
