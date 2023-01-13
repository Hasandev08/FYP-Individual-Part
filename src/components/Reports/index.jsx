import React from 'react'

import DashboardTables from '../common/DashboardTables'

import { productsTableHeader, revenueTableHeader } from '../../config/dashboardData'

import './style.css'

function Reports({ topCountries, topProducts, weekData }) {
  return (
    <div className='reports container-fluid'>
      <div className='row'>
        <div className='weekly-revenue col-md-5 col-12 mt-4'>
          <DashboardTables
            header={'Weekly Revenue'}
            tableHeader={revenueTableHeader}
            data={weekData}
            check={true}
          />
        </div>
        <div className='top container-fluid col-md-5 col-12'>
          <div className='row'>
            <div className='top-products mt-4'>
              <DashboardTables
                header={'Top Products'}
                tableHeader={productsTableHeader}
                data={topProducts}
                check={true}
              />
            </div>
            <div className='top-countries mt-4'>
              <DashboardTables header={'Top Countries'} data={topCountries} check={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports
