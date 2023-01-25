import React from 'react'

import Sidebar from '../../components/common/SideBar'

import { accountFormData, accountOtherFormData } from '../../config/accountData'

import './style.css'

function Account() {
  return (
    <div className='screen d-flex'>
      <div className='common-sidebar'>
        <Sidebar />
      </div>
      <div className='account'>
        <div className='account-header d-flex justify-content-between'>
          <h5 className='account-welcome'>Welcome, Levis</h5>
        </div>
        <div className='account-body d-flex flex-md-row flex-column'>
          <div className='account-body-left'>
            <div className='profile-pic'></div>
          </div>
          <div className='account-body-right'>
            <form className='account-forms d-flex flex-md-row flex-column'>
              <div className='form1'>
                {accountFormData.map((item, index) => (
                  <div key={index.toString()}>
                    <div className='mb-1'>
                      <label for='exampleInput' className='form-label'>
                        {item.label}
                      </label>
                      <input type={item.type} className='form-control' id='exampleInput' />
                    </div>
                  </div>
                ))}
              </div>
              <div className='form2'>
                {accountOtherFormData.map((item, index) => (
                  <div key={index.toString()}>
                    <div className='mb-1'>
                      <label for='exampleInput' className='form-label'>
                        {item.label}
                      </label>
                      <input type={item.type} className='form-control' id='exampleInput' />
                    </div>
                  </div>
                ))}
                <label for='exampleInput' className='form-label'>
                  About Info
                </label>
                <textarea className='form-control' id='exampleFormControlTextarea1' rows='5' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
