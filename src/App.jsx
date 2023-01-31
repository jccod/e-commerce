import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductInfo from './pages/ProductInfo'
import { getAllProducts } from './store/slices/products.slice'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:id' element={<ProductInfo />} />
      </Routes>
    </div>
  )
}

export default App

