import { useState } from 'react'
import Account from './screens/Account'
import AddProduct from './screens/AddProduct'
import Approvals from './screens/Approvals'
import Customer from './screens/Customer'
import DashBoard from './screens/DashBoard'
import EditProduct from './screens/EditProduct'
import Login from './screens/Login'
import Orders from './screens/Orders'
import Return from './screens/Return'
import SignUp from './screens/SignUp'
import Store from './screens/Store'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Routing() {
  const [token, setToken] = useState()

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          {token && <Route path='/account' exact element={<Account />} />}
          {token && <Route path='/store/add' exact element={<AddProduct />} />}
          {token && <Route path='/approvals' exact element={<Approvals />} />}
          {token && <Route path='/approvals/:id' exact element={<Customer />} />}
          {token && <Route path='/dashboard' exact element={<DashBoard />} />}
          {token && <Route path='/store/edit' exact element={<EditProduct />} />}
          <Route path='/' exact element={<Login setToken={setToken} />} />
          <Route path='/signup' exact element={<SignUp />} />
          {token && <Route path='/orders' exact element={<Orders />} />}
          {token && <Route path='/return' exact element={<Return />} />}
          {token && <Route path='/store' exact element={<Store />} />}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing
