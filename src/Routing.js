import Account from './screens/Account'
import AddProduct from './screens/AddProduct'
import DashBoard from './screens/DashBoard'
import Orders from './screens/Orders'
import Payments from './screens/Payments'
import Store from './screens/Store'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Routing() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/account' exact element={<Account />}></Route>
          <Route path='/payment' exact element={<Payments />}></Route>
          <Route path='/orders' exact element={<Orders />} />
          <Route path='/store/add' exact element={<AddProduct />} />
          <Route path='/store' exact element={<Store />} />
          <Route path='/' exact element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing
