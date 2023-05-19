import React from 'react'

import DeleteButton from '../../StoreButtons/DeleteButton'
import EditButton from '../../StoreButtons/EditButton'

import { useNavigate } from 'react-router-dom'

import './style.css'

function StoreTable({ listData, tableHeader }) {
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
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listData.map((item, index) => (
              <tr key={index.toString()}>
                <th scope='row'>{item.p_id}</th>
                <td>{item.product_name}</td>
                <td>{item.quantity}</td>
                <td>$ {item.r_price}</td>
                <td>$ {item.s_price}</td>
                <td>{item.size}</td>
                <td>{item.company_name}</td>

                <td>
                  <EditButton handleClick={() => navigate('/store/edit')} />
                </td>

                <td>
                  <DeleteButton />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default StoreTable
