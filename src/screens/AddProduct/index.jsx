import React from 'react'

import ProductFrom from '../../components/ProductForm'
import Sidebar from '../../components/SideBar'

import './style.css'

function AddProduct() {
  return (
    <div className='screen d-flex'>
      <div className='common-sidebar'>
        <Sidebar />
      </div>
      <div className='add-product'>
        <h5 className='add-product-heading mt-4'>Add Product</h5>
        <div className='add-product-form container-fluid'>
          <div className='row'>
            <div className='add-form-left col-md-5 col-12'>
              <ProductFrom />
            </div>
            <div className='add-form-right col-md-7 col-12 d-flex flex-column mb-3'>
              <p className='add-form-images mb-2'>Add Images</p>
              <div className='image-background d-flex'>
                <div className='browse-image d-flex justify-content-center align-items-center'>
                  <p>Click here to browse</p>
                </div>
                <div className='images-selected d-flex flex-column mx-1'>
                  <div className='first-row d-flex mb-2'>
                    <div className='image mx-1'></div>
                    <div className='image mx-1'></div>
                  </div>
                  <div className='second-row d-flex'>
                    <div className='image mx-1'></div>
                    <div className='image mx-1'></div>
                  </div>
                </div>
              </div>
              <div className='images-para my-2'>
                <p className='images-rule'>
                  You need to add at least 4 images. Pay attention to the quality of the pictures to
                  add, comply with the background color standard. Notice that the product must show
                  all the details
                </p>
              </div>
              <div className='product-sizes'>
                <label className='add-sizes mb-1'>Add Sizes</label>
                <select
                  className='form-select'
                  id='form-select-image'
                  aria-label='Default select example'
                >
                  <option selected>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
              </div>
              <div className='post-product-buttons mt-3'>
                <button className='post-button'>Add Product</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
