import React, { useState } from 'react'

import ReportTables from '../../components/common/ReportTables'
import SearchBar from '../../components/common/SearchBar'
import Sidebar from '../../components/common/SideBar'
import StoreCards from '../../components/StoreCards'
import ToggleButton from '../../components/ToggleButton'

import { productData, productHeader } from '../../config/productData'

import { useNavigate } from 'react-router-dom'

import './style.css'

function Store() {
  const navigate = useNavigate()
  const [filterProductData, setFilterProductData] = useState(productData)
  const [toggled, setToggled] = useState(false)

  const handleChange = (val) => {
    const filteredData = productData.filter(
      (item) =>
        item.product_name.toLowerCase().includes(val.toLowerCase()) ||
        item.company_name.toLowerCase().includes(val.toLowerCase())
    )
    setFilterProductData(filteredData)
  }

  const handleClick = () => {
    setToggled((s) => !s)
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
        <div className='add-product d-flex justify-content-between'>
          <button
            type='button'
            className='add-product-button'
            onClick={() => navigate('/store/add')}
          >
            Add
          </button>
          <div className='store-toggle'>
            <ToggleButton handleClick={handleClick} toggled={toggled} />
          </div>
        </div>
        <div className='products-store'>
          {!toggled ? (
            <div className='products-report'>
              <ReportTables
                check
                listData={filterProductData}
                productCheck
                tableHeader={productHeader}
              />
            </div>
          ) : (
            <div className='products-cards'>
              <StoreCards storeData={filterProductData} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Store
