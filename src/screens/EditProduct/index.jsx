import React from 'react'

import ProductForm from '../../components/ProductForm'
import Sidebar from '../../components/common/SideBar'

import './style.css'

function EditProduct() {
  const imageHandler = (e) => {
    const tempArr = []
    tempArr.push(e.target.files)
  }

  return (
    <div className='screen d-flex'>
      <div className='common-sidebar'>
        <Sidebar />
      </div>
      <div className='edit-product'>
        <h5 className='edit-product-heading mt-4'>Edit Product</h5>
        <div className='edit-product-form container-fluid'>
          <div className='row'>
            <div className='edit-form-left col-md-5 col-12'>
              <ProductForm />
            </div>
            <div className='edit-form-right col-md-7 col-12 d-flex flex-column mb-3'>
              <p className='edit-form-images mb-2'>Edit Images</p>
              <div className='image-background container-fluid'>
                <div className='row'>
                  <div className='browse-image col-md-5 d-flex justify-content-center align-items-center'>
                    <input type='file' onChange={imageHandler} />
                  </div>
                  <div className='images-selected col-md-6 mx-1 container-fluid'>
                    <div className='row'>
                      <div className='image col-md-4 col-5 m-1'></div>
                      <div className='image col-md-4 col-5 m-1'></div>
                      <div className='image col-md-4 col-5 m-1'></div>
                      <div className='image col-md-4 col-5 m-1'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='images-para my-2'>
                <p className='images-rule'>
                  You need to edit at least 4 images. Pay attention to the quality of the pictures
                  to edit, comply with the background color standard. Notice that the product must
                  show all the details
                </p>
              </div>
              <div className='product-sizes'>
                <label className='edit-sizes mb-1'>Edit Sizes</label>
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
                <button className='post-button'>Edit Product</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProduct
