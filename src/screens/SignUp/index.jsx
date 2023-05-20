import React, { useState } from 'react'

import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

import { useNavigate } from 'react-router-dom'

import logo from '../../assets/logo.png'

import axios from 'axios'

import './style.css'

const initialState = {
  fullName: '',
  storeName: '',
  email: '',
  password: '',
  phone: '',
  address: '',
  city: '',
  province: '',
  country: '',
  zipCode: '',
}

const SignUp = () => {
  const navigate = useNavigate()
  const [data, setData] = useState(initialState)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post(
        'https://f25e-119-160-98-57.ngrok-free.app/api/auth/registerseller',
        {
          username: data.email,
          password: data.password,
          name: data.name,
          storeName: data.storeName,
          phone: data.phone,
          address: data.address,
          city: data.city,
          zipCode: data.zipCode,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        navigate('/')
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const handleShowPassword = () => {
    var id = document.getElementById('Password')
    if (id.type === 'password') {
      setShowPassword(true)
      id.type = 'text'
    } else {
      setShowPassword(false)
      id.type = 'password'
    }
  }

  return (
    <div className='signup-page d-flex flex-column align-items-center'>
      <div className='row d-flex pt-4 w-100'>
        <div className='col-4 offset-1'>
          <img src={logo} alt='ShopiRent' className='navbar-brand' height='40px' width='150px' />
        </div>
        <div className='col-sm-2 offset-sm-4 col-3 offset-3 text-end'>
          <button
            class='btn btn-outline-success py-0 py-sm-1 py-md-2 px-1 px-sm-2 px-md-3 px-lg-4'
            type='button'
            onClick={() => navigate('/')}
          >
            Login
          </button>
        </div>
      </div>
      <div className='signup-container d-flex flex-column align-items-center justify-content-center mt-3'>
        <div className=''>
          <p className='main-text'>Get more things done with us</p>
        </div>
        <br />
        <div className=''>
          <p className='sub-text'>
            Search sourcing the world's brightest professionals for your business.
          </p>
        </div>
        <div className='signup-form mt-4'>
          <form className='d-flex flex-column align-items-center'>
            <div className='mb-4 form-control'>
              <input
                type='text'
                id='signupName'
                className='signup-input'
                placeholder='Name'
                required
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>
            <div className='mb-4 form-control'>
              <input
                type='text'
                id='signupStoreName'
                className='signup-input'
                placeholder='Store Name'
                required
                value={data.storeName}
                onChange={(e) => setData({ ...data, storeName: e.target.value })}
              />
            </div>
            <div className='mb-4 form-control'>
              <input
                type='email'
                id='signupEmail'
                className='signup-input'
                placeholder='Email Address'
                required
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            <div className='mb-4 d-flex form-control'>
              <input
                type='password'
                id='Password'
                className='signup-input'
                placeholder='Password'
                required
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
              <span>
                {showPassword ? (
                  <button onClick={handleShowPassword} className='show-password-button'>
                    <VisibilityOffIcon />
                  </button>
                ) : (
                  <button onClick={handleShowPassword} className='show-password-button'>
                    <VisibilityIcon />
                  </button>
                )}
              </span>
            </div>
            <div className='mb-4 form-control'>
              <input
                type='text'
                id='signupPhone'
                className='signup-input'
                placeholder='Phone'
                required
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })}
              />
            </div>
            <div className='mb-4 form-control'>
              <input
                type='text'
                id='signupAddress'
                className='signup-input'
                placeholder='Address'
                required
                value={data.address}
                onChange={(e) => setData({ ...data, address: e.target.value })}
              />
            </div>
            <div className='mb-4 form-control'>
              <input
                type='text'
                id='signupCity'
                className='signup-input'
                placeholder='City'
                required
                value={data.city}
                onChange={(e) => setData({ ...data, city: e.target.value })}
              />
            </div>
            <div className='mb-4 form-control'>
              <input
                type='text'
                id='signupProvince'
                className='signup-input'
                placeholder='Province'
                required
                value={data.storeName}
                onChange={(e) => setData({ ...data, province: e.target.value })}
              />
            </div>
            <div className='mb-4 form-control'>
              <input
                type='text'
                id='signupCountry'
                className='signup-input'
                placeholder='Country'
                required
                value={data.country}
                onChange={(e) => setData({ ...data, country: e.target.value })}
              />
            </div>
            <div className='mb-4 form-control'>
              <input
                type='text'
                id='signupZipCode'
                className='signup-input'
                placeholder='Zip Code'
                required
                value={data.zipCode}
                onChange={(e) => setData({ ...data, zipCode: e.target.value })}
              />
            </div>
            <div className='signup-button'>
              <button type='submit' className='signup-subButton' onClick={handleSubmit}>
                SignUp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
