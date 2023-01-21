import React, { useEffect, useState } from 'react'

import Cards from '../../components/Cards'
import Reports from '../../components/Reports'
import Sidebar from '../../components/common/SideBar'

import { countries, products, weekData } from '../../config/dashboardData'

import './style.css'

function DashBoard() {
  const [topCountries, setTopCountries] = useState([])
  const [topProducts, setTopProducts] = useState([])
  const [revenue, setRevenue] = useState(57)

  var weeklyRevenue = 0
  var monthlyRevenue = 0

  const updateProducts = () => {
    let tempData = []
    products.forEach((item) => {
      if (item.sale > 50) {
        tempData.push(item)
      }
    })
    setTopProducts(tempData)
  }

  const updateCountries = () => {
    let tempData = []
    countries.forEach((item) => {
      if (item.sale > 5000) {
        tempData.push(item)
      }
    })
    setTopCountries(tempData)
  }

  const calcWeekRevenue = () => {
    weekData.forEach((item) => {
      weeklyRevenue += item.sale
    })
  }

  const calcMonthlyRevenue = () => {
    monthlyRevenue = weeklyRevenue * 4
  }

  useEffect(() => {
    updateProducts()
    updateCountries()
  }, [])

  useEffect(() => {
    calcWeekRevenue()
    calcMonthlyRevenue()
  })

  return (
    <div className='screen d-flex'>
      <div className='common-sidebar'>
        <Sidebar />
      </div>
      <div className='dashboard d-flex flex-column px-5'>
        <div className='times d-flex mt-4 mb-2'>
          <button className='time-button mx-1' onClick={() => setRevenue(57)}>
            Daily
          </button>
          <button className='time-button mx-1' onClick={() => setRevenue(weeklyRevenue)}>
            Weekly
          </button>
          <button className='time-button mx-1' onClick={() => setRevenue(monthlyRevenue)}>
            Monthly
          </button>
        </div>
        <div className='dashboard-cards'>
          <Cards revenue={revenue} />
        </div>
        <div className='dashboard-reports'>
          <Reports topCountries={topCountries} topProducts={topProducts} weekData={weekData} />
        </div>
      </div>
    </div>
  )
}

export default DashBoard
