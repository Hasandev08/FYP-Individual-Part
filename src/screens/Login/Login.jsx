import React, { useState } from 'react'

import IconButton from '@mui/material/IconButton'
import { Tabs, Tab, Box } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

import logo from '../../assets/logo.png'

import axios from 'axios'

import { Link } from 'react-router-dom'

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

const loginState = {
  email: '',
  password: '',
}

const Login = () => {
  const [value, setValue] = useState('one')
  const [data, setData] = useState(initialState)
  const [loginData, setLoginData] = useState(loginState)
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleSubmit = (e) => {
    axios
      .post(
        'https://d302-119-160-98-179.ngrok-free.app/api/auth/login',
        {
          username: loginData.email,
          password: loginData.password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        console.log(response.data)
        localStorage.setItem('data', response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const handleSignUpSubmit = (e) => {
    axios
      .post(
        'https://d302-119-160-98-179.ngrok-free.app/api/auth/registerSeller',
        {
          username: loginData.email,
          password: loginData.password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        console.log(response)
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
    <div className='back'>
      <div className='row d-flex pt-4 align-items-center'>
        <div className='col-4 offset-1'>
          <img src={logo} alt='ShopiRent' className='navbar-brand' height='40px' width='150px' />
        </div>
      </div>

      <div className='container'>
        <div className='row mt-3'>
          <div className='col-10 offset-1 offset-lg-2 col-lg-8'>
            <p className='main-text'>Get more things done with us</p>
          </div>
          <br />
          <div className='col-10 offset-1 offset-lg-2 col-lg-8'>
            <p className='sub-text'>
              Search sourcing the world's brightest professionals for your business.
            </p>
          </div>
        </div>

        <div className='row justify-content-center'>
          <div className='col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4 text-center'>
            <Box sx={{ width: '100%' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor='secondary'
                indicatorColor='secondary'
                aria-label='secondary tabs example'
              >
                <Tab value='one' label='Login' />
                <Tab value='two' label='Sign up' />
              </Tabs>
            </Box>
          </div>
        </div>

        <div className='row justify-content-center'>
          <span className='col-10 col-md-8 col-lg-6 text-center'>
            <form className='mt-4 needs-validation'>
              {value === 'one' ? (
                <>
                  <div className='mb-4'>
                    <input
                      type='email'
                      className='form-control'
                      id='loginEmail'
                      placeholder='Email Address'
                      required
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    />
                  </div>
                  <div className='input-group'>
                    <input
                      type='password'
                      className='form-control'
                      id='Password'
                      placeholder='Password'
                      required
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    />
                    <span className='input-group-text' id='basic-addon2'>
                      {showPassword ? (
                        <IconButton onClick={handleShowPassword} size='small'>
                          <VisibilityOffIcon />
                        </IconButton>
                      ) : (
                        <IconButton onClick={handleShowPassword} size='small'>
                          <VisibilityIcon />
                        </IconButton>
                      )}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className='mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      id='signupName'
                      placeholder='Full Name'
                      required
                      value={data.fullName}
                      onChange={(e) => setData({ ...data, fullName: e.target.value })}
                    />
                  </div>
                  <div className='mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      id='storeName'
                      placeholder='Store Name'
                      required
                      value={data.storeName}
                      onChange={(e) => setData({ ...data, storeName: e.target.value })}
                    />
                  </div>
                  <div className='mb-3'>
                    <input
                      type='email'
                      className='form-control'
                      id='signupEmail'
                      placeholder='Email Address'
                      required
                      value={data.email}
                      onChange={(e) => setData({ ...data, email: e.target.value })}
                    />
                  </div>
                  <div className='input-group mb-3'>
                    <input
                      type='password'
                      className='form-control'
                      id='Password'
                      placeholder='Password'
                      required
                      value={data.password}
                      onChange={(e) => setData({ ...data, password: e.target.value })}
                    />
                    <span className='input-group-text' id='basic-addon2'>
                      <IconButton onClick={handleShowPassword} size='small'>
                        <VisibilityIcon />
                      </IconButton>
                    </span>
                  </div>
                  <div className='mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      id='phone'
                      placeholder='Phone'
                      required
                      value={data.phone}
                      onChange={(e) => setData({ ...data, phone: e.target.value })}
                    />
                  </div>
                  <div className='mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      id='address'
                      placeholder='Address'
                      required
                      value={data.address}
                      onChange={(e) => setData({ ...data, address: e.target.value })}
                    />
                  </div>
                  <div className='mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      id='city'
                      placeholder='City'
                      required
                      value={data.city}
                      onChange={(e) => setData({ ...data, city: e.target.value })}
                    />
                  </div>
                  <div className='mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      id='province'
                      placeholder='Province'
                      required
                      value={data.province}
                      onChange={(e) => setData({ ...data, province: e.target.value })}
                    />
                  </div>
                  <div className='mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      id='country'
                      placeholder='Country'
                      required
                      value={data.country}
                      onChange={(e) => setData({ ...data, country: e.target.value })}
                    />
                  </div>
                  <div className='mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      id='zipcode'
                      placeholder='Zip Code'
                      required
                      value={data.zipCode}
                      onChange={(e) => setData({ ...data, zipCode: e.target.value })}
                    />
                  </div>
                </>
              )}

              <div className='row justify-content-center mt-4'>
                <span className='col-9 col-sm-8 col-md-8 col-xl-6 text-center'>
                  {value === 'one' ? (
                    <>
                      <Link to='/dashboard'>
                        <button
                          type='submit'
                          className='btn btn-primary btn-lg'
                          onClick={handleSubmit}
                        >
                          Login
                        </button>
                      </Link>
                    </>
                  ) : (
                    <>
                      <button
                        type='submit'
                        className='btn btn-primary btn-lg'
                        onClick={handleSignUpSubmit}
                      >
                        Sign Up
                      </button>
                    </>
                  )}
                </span>
              </div>
            </form>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login
