import { Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import { CategoriesProvider } from './contexts/CategoriesContext'

import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Category from './pages/Category/Category'
import Singup from './pages/Login/singup'
import Login from './pages/Login/login'
import { ProductsProvider } from './contexts/ProductsContext'
import Product from './pages/Product/Product'
import Categories from './pages/Categories/Categories'
import ListSearchProducts from './components/SearchProducts/ListSearchProducts'


function App() {
  return (
    <>
      <CategoriesProvider>
        <ProductsProvider>
          <Navbar />
        </ProductsProvider>
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
              <CategoriesProvider>
                <Product />
              </CategoriesProvider>
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
