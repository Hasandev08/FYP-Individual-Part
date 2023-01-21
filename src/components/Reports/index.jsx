import React from 'react'

import ReportTables from '../common/ReportTables'

import { productsTableHeader, revenueTableHeader } from '../../config/dashboardData'

import './style.css'

function Reports({ topCountries, topProducts, weekData }) {
  return (
    <div className='reports container-fluid'>
      <div className='row'>
        <div className='weekly-revenue col-md-5 col-12 mt-4'>
          <ReportTables
            check
            header={'Weekly Revenue'}
            listData={weekData}
            tableHeader={revenueTableHeader}
          />
        </div>
        <div className='top container-fluid col-md-5 col-12'>
          <div className='row'>
            <div className='top-products mt-4'>
              <ReportTables
                check
                header={'Top Products'}
                listData={topProducts}
                tableHeader={productsTableHeader}
              />
            </div>
            <div className='top-countries mt-4'>
              <ReportTables header={'Top Countries'} listData={topCountries} check={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports
