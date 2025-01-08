import { Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import { CategoriesProvider } from './contexts/CategoriesContext'

import Home from './pages/Home/Home'
import Login from './pages/login'


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
        </Routes>
      </div>
    </>
      
  )
}

export default App
