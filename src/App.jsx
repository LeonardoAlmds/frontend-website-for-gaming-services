import { Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import { CategoriesProvider } from './contexts/CategoriesContext'

import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <>
      <CategoriesProvider>
        <Navbar />
      </CategoriesProvider>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>

      <Footer />
    </>
      
  )
}

export default App
