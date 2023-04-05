import React from 'react'

import DeleteButton from '../../StoreButtons/DeleteButton'
import EditButton from '../../StoreButtons/EditButton'

import { useNavigate } from 'react-router-dom'

import './style.css'

function ReportTables({ check, header, listData, productCheck, tableHeader, paymentCheck }) {
  const navigate = useNavigate()

  return (
    <div>
      {header && <p className='header'>{header}</p>}
      <div className='data'>
        <table className='table'>
          <thead>
            {check && (
              <tr>
                {tableHeader.map((item, index) => (
                  <th key={index.toString()} scope='col'>
                    {item.title}
                  </th>
                ))}
                {(productCheck || !paymentCheck) && <th></th>}
                {(productCheck || !paymentCheck) && <th></th>}
              </tr>
            )}
          </thead>
          <tbody>
            {listData.map((item, index) => (
              <tr key={index.toString()}>
                {check && !productCheck && !paymentCheck && <th scope='row'>{item.id}</th>}
                {!productCheck && !paymentCheck && <td>{item.name}</td>}
                {!productCheck && !paymentCheck && <td>{item.sale}</td>}
                {(productCheck || paymentCheck) && <td>{item.p_id}</td>}
                {paymentCheck && <td>{item.payment_name}</td>}
                {productCheck && <td>{item.product_name}</td>}
                {productCheck && <td>{item.quantity}</td>}
                {(productCheck || paymentCheck) && <td>$ {item.r_price}</td>}
                {(productCheck || paymentCheck) && <td>$ {item.s_price}</td>}
                {productCheck && <td>{item.size}</td>}
                {productCheck && <td>{item.company_name}</td>}
                {paymentCheck && <td>{item.date}</td>}
                {productCheck && (
                  <td>
                    <EditButton handleClick={() => navigate('/store/edit')} />
                  </td>
                )}
                {productCheck && (
                  <td>
                    <DeleteButton />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ReportTables
