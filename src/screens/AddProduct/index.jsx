import React, { useState } from 'react'

import ProductForm from '../../components/ProductForm'
import Sidebar from '../../components/common/SideBar'

// import { useNavigate } from 'react-router-dom'

import axios from 'axios'

import './style.css'

const initialState = {
  title: '',
  description: '',
  imageURL: '',
  category: '',
  subCategory: '',
  securityDeposit: '',
  rentingPrice: '',
  sellingPrice: '',
  saleRentingPrice: '',
  saleSellingPrice: '',
  size: '',
  highlights: '',
}

function AddProduct() {
  // const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const [data, setData] = useState(initialState)

  const imageHandler = (e) => {
    const tempArr = []
    tempArr.push(e.target.files)
  }

  const handleSubmit = (e) => {
    console.log(data)
    e.preventDefault()
    axios
      .post(
        'http://063a-111-68-102-12.ngrok-free.app/v1/product/add-products',
        {
          title: data.title,
          description: data.description,
          imageURL: '',
          category: data.category,
          subCategory: data.subCategory,
          securityDeposit: data.securityDeposit,
          rentingPrice: data.rentingPrice,
          sellingPrice: data.sellingPrice,
          saleRentingPrice: 1,
          saleSellingPrice: 1,
          size: data.size,
          highlights: '',
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        // navigate('/')
        console.log(response)
      })
      .catch((error) => {
        console.error(error)
      })
  }

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
              <ProductForm initialState={initialState} data={data} setData={setData} />
            </div>
            <div className='add-form-right col-md-7 col-12 d-flex flex-column mb-3'>
              <p className='add-form-images mb-2'>Add Images</p>
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
                  You need to add at least 4 images. Pay attention to the quality of the pictures to
                  add, comply with the background color standard. Notice that the product must show
                  all the details
                </p>
              </div>
              <div className='post-product-buttons mt-3'>
                <button className='post-button' onClick={handleSubmit}>
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
