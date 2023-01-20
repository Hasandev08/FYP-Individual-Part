import AddProduct from './screens/AddProduct'
import DashBoard from './screens/DashBoard'
import Orders from './screens/Orders'
import Products from './screens/Products'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/orders' exact element={<Orders />} />
          <Route path='/products/add' exact element={<AddProduct />} />
          <Route path='/products' exact element={<Products />} />
          <Route path='/' exact element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
