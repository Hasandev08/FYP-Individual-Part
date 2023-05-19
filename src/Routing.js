import Account from './screens/Account'
import AddProduct from './screens/AddProduct'
import Approvals from './screens/Approvals'
import Customer from './screens/Customer'
import DashBoard from './screens/DashBoard'
import EditProduct from './screens/EditProduct'
import Login from './screens/Login/Login'
import Orders from './screens/Orders'
import Return from './screens/Return'
import Store from './screens/Store'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Routing() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/account' exact element={<Account />} />
          <Route path='/store/add' exact element={<AddProduct />} />
          <Route path='/approvals' exact element={<Approvals />} />
          <Route path='/approvals/:id' exact element={<Customer />} />
          <Route path='/dashboard' exact element={<DashBoard />} />
          <Route path='/store/edit' exact element={<EditProduct />} />
          <Route path='/' exact element={<Login />} />
          <Route path='/orders' exact element={<Orders />} />
          <Route path='/return' exact element={<Return />} />
          <Route path='/store' exact element={<Store />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing
