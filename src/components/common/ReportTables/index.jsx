import React from 'react'

import './style.css'

function ReportTables({ check, header, listData, productCheck, tableHeader }) {
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
              </tr>
            )}
          </thead>
          <tbody>
            {listData.map((item, index) => (
              <tr key={index.toString()}>
                {check && !productCheck && <th scope='row'>{item.id}</th>}
                {!productCheck && <td>{item.name}</td>}
                {!productCheck && <td>{item.sale}</td>}
                {productCheck && <td>{item.p_id}</td>}
                {productCheck && <td>{item.product_name}</td>}
                {productCheck && <td>{item.quantity}</td>}
                {productCheck && <td>$ {item.p_price}</td>}
                {productCheck && <td>$ {item.s_price}</td>}
                {productCheck && <td>{item.size}</td>}
                {productCheck && <td>{item.company_name}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ReportTables
