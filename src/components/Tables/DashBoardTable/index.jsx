import React from 'react'

import './style.css'

function DashBoardTable({ header, listData, tableHeader }) {
  return (
    <div>
      <p className='header'>{header}</p>
      <div className='data'>
        <table className='table'>
          {tableHeader && (
            <thead>
              <tr>
                {tableHeader.map((item, index) => (
                  <th key={index.toString()} scope='col'>
                    {item.title}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {listData.map((item, index) => (
              <tr key={index.toString()}>
                <th scope='row'>{item.id}</th>
                <td>{item.name}</td>
                <td>{item.sale}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DashBoardTable
