import React from 'react'

import DashBoardTable from '../Tables/DashBoardTable'

import { productsTableHeader, revenueTableHeader } from '../../config/dashboardData'

import './style.css'

function DashBoardContent({ topCountries, topProducts, weekData }) {
  return (
    <div className='reports container-fluid'>
      <div className='row'>
        <div className='weekly-revenue col-md-5 col-12 mt-4'>
          <DashBoardTable
            header={'Weekly Revenue'}
            listData={weekData}
            tableHeader={revenueTableHeader}
          />
        </div>
        <div className='top container-fluid col-md-5 col-12'>
          <div className='row'>
            <div className='top-products mt-4'>
              <DashBoardTable
                header={'Top Products'}
                listData={topProducts}
                tableHeader={productsTableHeader}
              />
            </div>
            <div className='top-countries mt-4'>
              <DashBoardTable header={'Top Countries'} listData={topCountries} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashBoardContent
