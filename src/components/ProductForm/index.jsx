import React from 'react'

import { productOptions, productPrice } from '../../config/addProductData'

import './style.css'

function ProductForm() {
  return (
    <div className='add-form'>
      <form>
        <label className='add-form-heading'>Product Name</label>
        <input
          className='form-control'
          type='text'
          placeholder='Product Name'
          aria-label='default input example'
        />
        {productOptions.map((item, index) => (
          <div key={index.toString()}>
            <label className='add-form-heading'>{item.label}</label>
            <select className='form-select' aria-label='Default select example'>
              <option selected>{item.option1}</option>
              <option>{item.option2}</option>
              <option>{item.option3}</option>
              <option>{item.option4}</option>
            </select>
          </div>
        ))}
        {productPrice.map((item, index) => (
          <div key={index.toString()}>
            <label className='add-form-heading'>{item.label}</label>
            <input
              className='form-control'
              type='number'
              placeholder='Price'
              aria-label='default input example'
            />
          </div>
        ))}
        <label className='add-form-heading'>Product Description</label>
        <div className='mb-3'>
          <textarea className='form-control' id='exampleFormControlTextarea1' rows='5' />
        </div>
      </form>
    </div>
  )
}

export default ProductForm
