import React, { useState } from 'react'

import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

import { useNavigate } from 'react-router-dom'

import logo from '../../assets/logo.png'

import axios from 'axios'

import './style.css'

const loginState = {
  email: '',
  password: '',
}

const Login = () => {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState(loginState)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    axios
      .post(
        'https://f25e-119-160-98-57.ngrok-free.app/api/auth/login',
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
        navigate('/dashboard')
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
    <div className='login-page'>
      <div className='row d-flex pt-4'>
        <div className='col-4 offset-1'>
          <img src={logo} alt='ShopiRent' className='navbar-brand' height='40px' width='150px' />
        </div>
        <div className='col-sm-2 offset-sm-4 col-3 offset-3 text-end'>
          <button
            class='btn btn-outline-success py-0 py-sm-1 py-md-2 px-1 px-sm-2 px-md-3 px-lg-4'
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
                required
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              />
            </div>
            <div className='mb-4 d-flex form-control'>
              <input
                type='password'
                id='Password'
                className='login-input'
                placeholder='Password'
                required
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
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
