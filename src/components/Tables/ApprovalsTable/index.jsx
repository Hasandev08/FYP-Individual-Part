import React from 'react'

import { useNavigate } from 'react-router-dom'

import './style.css'

function ApprovalsTable({ listData, tableHeader }) {
  const navigate = useNavigate()

  return (
    <>
      <div className='data'>
        <table className='table'>
          <thead>
            <tr>
              {tableHeader.map((item, index) => (
                <th key={index.toString()} scope='col'>
                  {item.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {listData.map((item, index) => (
              <tr
                key={index.toString()}
                onClick={() => navigate(`/approvals/${item.id}`, { state: item })}
              >
                <th scope='row'>{item.id}</th>
                <td>{item.customer_name}</td>
                <td>{item.product_name}</td>
                <td>{item.quantity}</td>
                <td>$ {item.r_price}</td>
                <td>{item.from}</td>
                <td>{item.to}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ApprovalsTable
