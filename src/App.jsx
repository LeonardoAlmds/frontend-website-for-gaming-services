import { Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import { CategoriesProvider } from './contexts/CategoriesContext'

import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Category from './pages/Category/Category'
import Singup from './pages/singup'
import Login from './pages/login'
import { ProductsProvider } from './contexts/ProductsContext'
import Product from './pages/Product/Product'
import Categories from './pages/Categories/Categories'


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

          <Route path='/signup' element={<Singup />} />

          <Route path='/login' element={<Login />} />

          <Route 
            path='/product'
            element={ 
              <ProductsProvider>
                <Product />
              </ProductsProvider>
            }/>
          
          <Route 
            path='/categories' 
            element={
            <CategoriesProvider>
              <Categories />
            </CategoriesProvider>
            }/>

          <Route 
            path='/category' 
            element={
              <ProductsProvider>
                <Category />
              </ProductsProvider>
            }/>
        </Routes>
      </div>

      <Footer />
    </>
      
  )
}

export default App
