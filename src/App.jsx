import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductInfo from './pages/ProductInfo'
import { getAllProducts } from './store/slices/products.slice'
import Login from './pages/Login'
import { getUserCart } from './store/slices/cart.slice'
import Header from './components/shared/Header'
import Cart from './pages/Cart'
import Purchases from './pages/Purchases'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
    dispatch(getUserCart())
  }, [])

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/product/:id' element={<ProductInfo />} />
        <Route path='/purchases' element={<Purchases />} />
      </Routes>
    </div>
  )
}

export default App

