import React from 'react'

function DashboardTables({ header, tableHeader, data, check }) {
  return (
    <div>
      <p>{header}</p>
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
            {data.map((item, index) => (
              <tr key={index.toString()}>
                {check && <th scope='row'>{item.id}</th>}
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

export default DashboardTables
