import React from 'react'

import ReportTables from '../../components/common/ReportTables'
import Sidebar from '../../components/common/SideBar'

import { paymentHeader, paymentList } from '../../config/paymentData'

function Payments() {
  return (
    <div className='screen d-flex'>
      <div className='common-sidebar'>
        <Sidebar />
      </div>
      <div className='payments'>
        <ReportTables listData={paymentList} tableHeader={paymentHeader} paymentCheck />
      </div>
    </div>
  )
}

export default Payments
