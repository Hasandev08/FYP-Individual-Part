import React, { useState } from 'react'

import ReportTables from '../../components/common/ReportTables'
import Pagination from '../../components/Pagination'
import SearchBar from '../../components/common/SearchBar'

import { productData, productHeader } from '../../config/productData'

import './style.css'

function Products() {
  const [filterProductData, setFilterProductData] = useState(productData)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

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
    <div className='products d-flex flex-column'>
      <div className='products-search my-4'>
        <SearchBar handleChange={handleChange} />
      </div>
      <div className='products-report mx-5'>
        <ReportTables check listData={filterProductData} productCheck tableHeader={productHeader} />
      </div>
    </div>
  )
}

export default Products
