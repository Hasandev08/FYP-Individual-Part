import React, { useState } from 'react'
import axios from 'axios'

import logo from '../../assets/logo.png'

import { useNavigate } from 'react-router-dom'

import './style.css'

const loginState = {
  email: '',
  password: '',
}

const Login = ({ setToken }) => {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState(loginState)

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post(
        `https://4980-119-160-98-57.ngrok-free.app/api/auth/login`,
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
        localStorage.setItem('token', response.data)
        setToken(response.data.accessToken)
        console.log('token', response.data.accessToken)
        navigate('/dashboard')
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div className='login-page'>
      <div className='row d-flex pt-4'>
        <div className='col-4 offset-1'>
          <img src={logo} alt='ShopiRent' className='navbar-brand' height='40px' width='150px' />
        </div>
        <div className='col-sm-2 offset-sm-4 col-3 offset-3 text-end'>
          <button
            className='btn btn-outline-success py-0 py-sm-1 py-md-2 px-1 px-sm-2 px-md-3 px-lg-4'
            type='button'
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </button>
        </div>
      </div>
      <div className='container d-flex flex-column align-items-center justify-content-center mt-3'>
        <div className=''>
          <p className='main-text'>Get more things done with us</p>
        </div>
        <br />
        <div className=''>
          <p className='sub-text'>
            Search sourcing the world's brightest professionals for your business.
          </p>
        </div>
        <div className='login-form mt-4'>
          <form className='d-flex flex-column align-items-center'>
            <div className='mb-4 form-control'>
              <input
                type='email'
                id='loginEmail'
                className='login-input'
                placeholder='Email Address'
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              />
            </div>
            <div className='mb-4 d-flex form-control'>
              <input
                autoComplete='on'
                type='password'
                id='Password'
                className='login-input'
                placeholder='Password'
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              />
            </div>
            <div className='login-button'>
              <button type='submit' className='login-subButton' onClick={handleSubmit}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
