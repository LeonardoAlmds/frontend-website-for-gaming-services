import { Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import { CategoriesProvider } from './contexts/CategoriesContext'

import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Category from './pages/Category/Category'
import Login from './pages/login'
import Product from './pages/Product/Product'


function App() {
  return (
    <>
      <CategoriesProvider>
        <Navbar />
      </CategoriesProvider>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<h1>Not Found</h1>} />
          <Route path='/login' element={<Login />} />

          <Route path='/product' element={<Product />} />
          
          <Route 
            path='/category' 
            element={
              <Category />
            }/>
        </Routes>
      </div>

      <Footer />
    </>
      
  )
}

export default App
