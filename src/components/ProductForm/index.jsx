import React from 'react'

import './style.css'

function ProductForm({ data, setData }) {
  return (
    <div className='add-form'>
      <form>
        <label className='add-form-heading'>Product Name</label>
        <input
          className='form-control'
          type='text'
          aria-label='default input example'
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <label className='add-form-heading'>Category</label>
        <input
          className='form-control'
          type='text'
          aria-label='default input example'
          onChange={(e) => setData({ ...data, category: e.target.value })}
        />
        <label className='add-form-heading'>Sub-Category</label>
        <input
          className='form-control'
          type='text'
          aria-label='default input example'
          onChange={(e) => setData({ ...data, subCategory: e.target.value })}
        />
        <label className='add-form-heading'>Security Deposit</label>
        <input
          className='form-control'
          type='number'
          aria-label='default input example'
          onChange={(e) => setData({ ...data, securityDeposit: e.target.value })}
        />
        <label className='add-form-heading'>Rental Price</label>
        <input
          className='form-control'
          type='number'
          aria-label='default input example'
          onChange={(e) => setData({ ...data, rentingPrice: e.target.value })}
        />
        <label className='add-form-heading'>Selling Price</label>
        <input
          className='form-control'
          type='number'
          aria-label='default input example'
          onChange={(e) => setData({ ...data, sellingPrice: e.target.value })}
        />
        <label className='add-form-heading'>Size</label>
        <input
          className='form-control'
          type='text'
          aria-label='default input example'
          onChange={(e) => setData({ ...data, size: e.target.value })}
        />
        <label className='add-form-heading'>Product Description</label>
        <div className='mb-3'>
          <textarea
            className='form-control'
            id='exampleFormControlTextarea1'
            rows='5'
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />
        </div>
      </form>
    </div>
  )
}

export default ProductForm
